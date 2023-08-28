import axios from 'axios';
import queryString from 'query-string';
import { SecurityAssessmentInterface, SecurityAssessmentGetQueryInterface } from 'interfaces/security-assessment';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSecurityAssessments = async (
  query?: SecurityAssessmentGetQueryInterface,
): Promise<PaginatedInterface<SecurityAssessmentInterface>> => {
  const response = await axios.get('/api/security-assessments', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSecurityAssessment = async (securityAssessment: SecurityAssessmentInterface) => {
  const response = await axios.post('/api/security-assessments', securityAssessment);
  return response.data;
};

export const updateSecurityAssessmentById = async (id: string, securityAssessment: SecurityAssessmentInterface) => {
  const response = await axios.put(`/api/security-assessments/${id}`, securityAssessment);
  return response.data;
};

export const getSecurityAssessmentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/security-assessments/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSecurityAssessmentById = async (id: string) => {
  const response = await axios.delete(`/api/security-assessments/${id}`);
  return response.data;
};
