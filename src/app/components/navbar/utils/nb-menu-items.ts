export const SPONSOR_MENU_ITEMS = {
  title: 'Sponsors',
  icon: 'tv-outline',
  children: [
    {
      title: 'My Sponsorships',
      link: '/sponsors/self',
      icon: 'tv-outline'
    },
    {
      title: 'Create Sponsor',
      icon: 'plus-outline',
      link: '/sponsors/create'
    }
  ]
};

export const EXPLORER_MENU_ITEMS = [
  {
    title: 'Profile',
    icon: 'person-outline',
    link: '/profile'
  },
  {
    title: 'Logout',
    icon: 'log-out-outline'
  }
];

export const MANAGER_MENU_ITEMS = [
  {
    title: 'Trips',
    icon: 'briefcase-outline',
    children: [
      {
        title: 'My Trips',
        icon: 'briefcase-outline',
        link: '/trips/self'
      },
      {
        title: 'Create trip',
        icon: 'plus-outline',
        link: '/trips/create'
      }
    ]
  }
];

export const ADMIN_MENU_ITEMS = [
  {
    title: 'Dashboard',
    icon: 'keypad-outline'
  },
  ...MANAGER_MENU_ITEMS,
  SPONSOR_MENU_ITEMS,
  ...EXPLORER_MENU_ITEMS
];