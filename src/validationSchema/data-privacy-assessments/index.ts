import * as yup from 'yup';

export const dataPrivacyAssessmentValidationSchema = yup.object().shape({
  assessment_date: yup.date().required(),
  assessment_details: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
