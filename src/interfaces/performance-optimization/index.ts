import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceOptimizationInterface {
  id?: string;
  optimization_date: any;
  optimization_details: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface PerformanceOptimizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  optimization_details?: string;
  user_id?: string;
  organization_id?: string;
}
