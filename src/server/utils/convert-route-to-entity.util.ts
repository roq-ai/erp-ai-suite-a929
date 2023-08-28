const mapping: Record<string, string> = {
  'data-privacy-assessments': 'data_privacy_assessment',
  'log-analyses': 'log_analysis',
  organizations: 'organization',
  'performance-optimizations': 'performance_optimization',
  'security-assessments': 'security_assessment',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
