import { Work } from '@/types';

export const works: Work[] = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    category: 'Web Development',
    thumbnailUrl: '/images/works/portfolio-website.png',
    description: `Built this personal portfolio website using Next.js, Tailwind CSS, and TypeScript. This is a static site `+ 
    'generated at build time and hosted on Vercel. The site is fully responsive and works on all devices.' + 
    ' support for custom Blog features like custom animations, custom fonts, and custom colors.',
    publishedAt: '01 July 2022',
    images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
    previewUrl: 'https://andreasmaita.com/',
    featureList: [
      '100% Fluid Responsive – Fits any device perfectly',
      'Tested on real devices',
      'Flexible Layout',
      'Retina Optimized',
      'Advanced Admin Panel',
      'Social Links',
      'Bottom Footer Widgets',
      'Advanced Typography',
      'Google Fonts – 600+ Font families available',
      'Custom Font Support',
      'Custom Page Templates',
      'Pixel Perfect Design',
      'Custom CSS Ready',
      'Easy Customization With Variable Content Sections',
      'SEO Ready',
    ],
    attributes: [
      {
        name: 'Client',
        value: 'Myself',
      },
      {
        name: 'Start Date',
        value: '01 July 2022',
      },
      {
        name: 'End Date',
        value: '24 January 2022',
      },
      {
        name: 'Category',
        value: 'Web Development',
      },
      {
        name: 'Skills',
        value: 'Typescript, Next.js & Tailwind CSS',
      },
      {
        name: 'Current Version',
        value: '3.0.0',
      },
      {
        name: 'Lisence',
        value: 'MIT',
      },
    ],
  },

  {
    id: 2,
    title: 'Dog Loving Mobile App',
    category: 'Mobile App',
    thumbnailUrl: '/images/works/social-media-app.png',
    description: `
    Mobile app for dog lovers. This app is built using flutter and dart. The app is fully responsive and works on all devices.
    This App will show you a random dog image on tap. You can also save your favorite dog images to your device.
    
    Released on Android and iOS. Also open source on Github.
    This app uses background api calls to fetch data from the internet and stores them in a buffer. This is done to reduce the number of api calls and improve performance.`,

    publishedAt: '01 July 2022',
    images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
    previewUrl: 'https://pofology.bdlancers.com/',
    featureList: [
      '100% Fluid Responsive – Fits any device perfectly',
      'Tested on real devices',
      'Simple UI',
      'Custom Font Support',
      'easy download and installation',
      'Custom CSS Ready',
      'HTML5 &amp; CSS3',
      'Easy Customization With Variable Content Sections',
      'Custom Build Theme &amp; Page Options',
      'SEO Ready',
    ],
    attributes: [
      {
        name: 'Client',
        value: 'Pofology',
      },
      {
        name: 'Start Date',
        value: '01 July 2022',
      },
      {
        name: 'End Date',
        value: '01 October 2022',
      },
      {
        name: 'Category',
        value: 'Web Development',
      },
      {
        name: 'Skills',
        value: 'Typescript, Next.js & Tailwind CSS',
      },
      {
        name: 'Current Version',
        value: '3.0.0',
      },
      {
        name: 'Lisence',
        value: 'MIT',
      },
    ],
  }
];
