import axios from 'axios';
import queryString from 'query-string';
import {
  PerformanceOptimizationInterface,
  PerformanceOptimizationGetQueryInterface,
} from 'interfaces/performance-optimization';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPerformanceOptimizations = async (
  query?: PerformanceOptimizationGetQueryInterface,
): Promise<PaginatedInterface<PerformanceOptimizationInterface>> => {
  const response = await axios.get('/api/performance-optimizations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPerformanceOptimization = async (performanceOptimization: PerformanceOptimizationInterface) => {
  const response = await axios.post('/api/performance-optimizations', performanceOptimization);
  return response.data;
};

export const updatePerformanceOptimizationById = async (
  id: string,
  performanceOptimization: PerformanceOptimizationInterface,
) => {
  const response = await axios.put(`/api/performance-optimizations/${id}`, performanceOptimization);
  return response.data;
};

export const getPerformanceOptimizationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/performance-optimizations/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deletePerformanceOptimizationById = async (id: string) => {
  const response = await axios.delete(`/api/performance-optimizations/${id}`);
  return response.data;
};
