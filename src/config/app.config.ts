interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: [],
  tenantRoles: ['System Administrator', 'Data Analyst', 'Security Officer'],
  tenantName: 'Organization',
  applicationName: 'ERP-AI Suite',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
