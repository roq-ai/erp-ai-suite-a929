import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface LogAnalysisInterface {
  id?: string;
  log_date: any;
  log_details: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface LogAnalysisGetQueryInterface extends GetQueryInterface {
  id?: string;
  log_details?: string;
  user_id?: string;
  organization_id?: string;
}
