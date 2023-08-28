import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface DataPrivacyAssessmentInterface {
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

export interface DataPrivacyAssessmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  assessment_details?: string;
  user_id?: string;
  organization_id?: string;
}
