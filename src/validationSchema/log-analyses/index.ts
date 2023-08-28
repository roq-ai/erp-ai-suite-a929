import * as yup from 'yup';

export const logAnalysisValidationSchema = yup.object().shape({
  log_date: yup.date().required(),
  log_details: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
