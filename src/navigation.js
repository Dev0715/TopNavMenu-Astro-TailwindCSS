import {
  getPermalink,
  // getBlogPermalink, getAsset
} from './utils/permalinks';

const CASE_STUDIES = 'Case Studies';
const ABOUT_US = 'About Us';

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
    {
      text: 'Integrations',
      href: getPermalink('/integrations'),
    },
    {
      text: CASE_STUDIES,
      href: getPermalink('/case-studies'),
    },
    {
      text: ABOUT_US,
      href: getPermalink('/about'),
    },
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
        { text: 'Contact Us', href: getPermalink('/contact') },
        { text: ABOUT_US, href: getPermalink('/about') },
        { text: CASE_STUDIES, href: getPermalink('/case-studies') },
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
