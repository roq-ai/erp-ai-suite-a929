import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface SecurityAssessmentInterface {
  id?: string;
  assessment_date: any;
  assessment_details: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface SecurityAssessmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  assessment_details?: string;
  user_id?: string;
  organization_id?: string;
}
