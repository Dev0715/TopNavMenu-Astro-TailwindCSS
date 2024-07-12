import {
  getPermalink,
  // getBlogPermalink, getAsset
} from './utils/permalinks';

const CASE_STUDIES = {
  text: 'Case Studies',
  href: getPermalink('/case-studies'),
};
const ABOUT_US = {
  text: 'About Us',
  href: getPermalink('/about'),
};

const CONTACT_US = {
  text: 'Contact Us',
  href: getPermalink('/contact'),
};

// const INTEGRATIONS = {
//   text: 'Integrations',
//   href: getPermalink('/integrations'),
// };

const LINKS = [
  {
    text: 'HR Manager',
    href: getPermalink('/apps/people'),
  },
  {
    text: 'Personnel Planner',
    href: getPermalink('/apps/planner'),
  },
  {
    text: 'Time Tracker',
    href: getPermalink('/apps/time-tracker'),
  },
  {
    text: 'Competency Manager',
    href: getPermalink('/apps/skills'),
  },
  {
    text: 'Logistics & Equipment Rental',
    href: getPermalink('/apps/tools'),
  },
];

export const headerData = {
  links: [
    {
      text: 'Solutions',
      links: LINKS,
    },
    // INTEGRATIONS,
    CASE_STUDIES,
    ABOUT_US,
  ],
  actions: [{ text: 'Book Demo', href: getPermalink('/contact'), variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: '',
      links: LINKS,
    },
    {
      title: '',
      links: [
        CONTACT_US,
        ABOUT_US,
        CASE_STUDIES,
        // INTEGRATIONS
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/company/markular',
      target: '_blank',
    },
  ],
};
