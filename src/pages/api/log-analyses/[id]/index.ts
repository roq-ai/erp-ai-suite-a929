import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware, notificationHandlerMiddleware } from 'server/middlewares';
import { logAnalysisValidationSchema } from 'validationSchema/log-analyses';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  const allowed = await prisma.log_analysis
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  if (!allowed) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  switch (req.method) {
    case 'GET':
      return getLogAnalysisById();
    case 'PUT':
      return updateLogAnalysisById();
    case 'DELETE':
      return deleteLogAnalysisById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getLogAnalysisById() {
    const data = await prisma.log_analysis.findFirst(convertQueryToPrismaUtil(req.query, 'log_analysis'));
    return res.status(200).json(data);
  }

  async function updateLogAnalysisById() {
    await logAnalysisValidationSchema.validate(req.body);
    const data = await prisma.log_analysis.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
  async function deleteLogAnalysisById() {
    await notificationHandlerMiddleware(req, req.query.id as string);
    const data = await prisma.log_analysis.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
