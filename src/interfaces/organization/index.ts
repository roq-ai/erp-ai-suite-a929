import { DataPrivacyAssessmentInterface } from 'interfaces/data-privacy-assessment';
import { LogAnalysisInterface } from 'interfaces/log-analysis';
import { PerformanceOptimizationInterface } from 'interfaces/performance-optimization';
import { SecurityAssessmentInterface } from 'interfaces/security-assessment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  data_privacy_assessment?: DataPrivacyAssessmentInterface[];
  log_analysis?: LogAnalysisInterface[];
  performance_optimization?: PerformanceOptimizationInterface[];
  security_assessment?: SecurityAssessmentInterface[];
  user?: UserInterface;
  _count?: {
    data_privacy_assessment?: number;
    log_analysis?: number;
    performance_optimization?: number;
    security_assessment?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
