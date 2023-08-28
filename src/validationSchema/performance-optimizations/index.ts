import * as yup from 'yup';

export const performanceOptimizationValidationSchema = yup.object().shape({
  optimization_date: yup.date().required(),
  optimization_details: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
