export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: any;
  title?: boolean;
  children?: any;
  variant?: string;
  attributes?: object;
  divider?: boolean;
  class?: string;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info'
    }
  },
  {
    name: 'Major',
    url: '/major',
    icon: 'fa fa-briefcase'
  },
  {
    name: 'Student',
    url: '/student',
    icon: 'fa fa-user'
  }
];
