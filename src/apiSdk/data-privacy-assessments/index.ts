import axios from 'axios';
import queryString from 'query-string';
import {
  DataPrivacyAssessmentInterface,
  DataPrivacyAssessmentGetQueryInterface,
} from 'interfaces/data-privacy-assessment';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDataPrivacyAssessments = async (
  query?: DataPrivacyAssessmentGetQueryInterface,
): Promise<PaginatedInterface<DataPrivacyAssessmentInterface>> => {
  const response = await axios.get('/api/data-privacy-assessments', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDataPrivacyAssessment = async (dataPrivacyAssessment: DataPrivacyAssessmentInterface) => {
  const response = await axios.post('/api/data-privacy-assessments', dataPrivacyAssessment);
  return response.data;
};

export const updateDataPrivacyAssessmentById = async (
  id: string,
  dataPrivacyAssessment: DataPrivacyAssessmentInterface,
) => {
  const response = await axios.put(`/api/data-privacy-assessments/${id}`, dataPrivacyAssessment);
  return response.data;
};

export const getDataPrivacyAssessmentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/data-privacy-assessments/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteDataPrivacyAssessmentById = async (id: string) => {
  const response = await axios.delete(`/api/data-privacy-assessments/${id}`);
  return response.data;
};
