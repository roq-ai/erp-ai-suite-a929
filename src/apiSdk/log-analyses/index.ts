import axios from 'axios';
import queryString from 'query-string';
import { LogAnalysisInterface, LogAnalysisGetQueryInterface } from 'interfaces/log-analysis';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLogAnalyses = async (
  query?: LogAnalysisGetQueryInterface,
): Promise<PaginatedInterface<LogAnalysisInterface>> => {
  const response = await axios.get('/api/log-analyses', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLogAnalysis = async (logAnalysis: LogAnalysisInterface) => {
  const response = await axios.post('/api/log-analyses', logAnalysis);
  return response.data;
};

export const updateLogAnalysisById = async (id: string, logAnalysis: LogAnalysisInterface) => {
  const response = await axios.put(`/api/log-analyses/${id}`, logAnalysis);
  return response.data;
};

export const getLogAnalysisById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/log-analyses/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLogAnalysisById = async (id: string) => {
  const response = await axios.delete(`/api/log-analyses/${id}`);
  return response.data;
};
