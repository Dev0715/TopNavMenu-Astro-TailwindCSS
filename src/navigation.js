import {
  getPermalink,
  // getBlogPermalink, getAsset
} from './utils/permalinks';

const CASE_STUDIES = 'Case Studies';
const ABOUT_US = 'About Us';

export const headerData = {
  links: [
    {
      text: 'Operational Management Suite',
      links: [
        {
          text: 'HR Manager',
          href: getPermalink('/apps/people'),
        },
        {
          text: 'Personnel Planner',
          href: getPermalink('/apps/planner'),
        },
        {
          text: 'Logistics & Equipment Rental',
          href: getPermalink('/apps/rentals'),
        },
        {
          text: 'Time Tracker',
          href: getPermalink('/apps/time-tracker'),
        },
        {
          text: 'Competency Manager',
          href: getPermalink('/apps/competency'),
        },
      ],
    },
    {
      text: CASE_STUDIES,
      href: getPermalink('/case-studies'),
    },
    {
      text: ABOUT_US,
      href: getPermalink('/about'),
    },
    // {
    //   text: 'Features',
    //   href: '#',
    // },

    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },
    //     {
    //       text: 'Services',
    //       href: getPermalink('/services'),
    //     },
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'About us',
    //       href: getPermalink('/about'),
    //     },
    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Blog',
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  // actions: [{ text: 'Demo', href: getPermalink('/contact'), target: '_blank' }],
  actions: [{ text: 'Contact Us', href: getPermalink('/contact'), variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: '',
      links: [
        { text: 'HR Manager', href: getPermalink('/apps/people') },
        { text: 'Personnel Planner', href: getPermalink('/apps/planner') },
        { text: 'Logistics & Equipment Rental', href: getPermalink('/apps/rental') },
        { text: 'Time Tracker', href: getPermalink('/apps/time-tracker') },
        { text: 'Competency Manager', href: getPermalink('/apps/compentency') },
      ],
    },

    {
      title: '',
      links: [
        { text: CASE_STUDIES, href: getPermalink('/case-studies') },

        // { text: 'Solutions', href: '#' },
        // { text: 'Resources', href: '#' },
        // { text: 'Pricing', href: '#' },
      ],
    },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //   ],
    // },
    {
      title: '',
      links: [
        { text: 'Contact Us', href: getPermalink('/contact') },
        { text: ABOUT_US, href: getPermalink('/about') },
        // { text: 'FAQ', href: '#' },
        // { text: 'Demo', href: '#' },
        // { text: 'Careers', href: '#' },
        // { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About', href: '#' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Careers', href: '#' },
    //     { text: 'Press', href: '#' },
    //     { text: 'Inclusion', href: '#' },
    //     { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    // { text: 'Address', href: getPermalink('/terms') },
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
