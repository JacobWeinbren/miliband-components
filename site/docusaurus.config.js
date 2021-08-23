/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Miliband Components',
  tagline: 'A Component Library built for The Social Review',
  url: 'https://jacobweinbren.github.io/', // Your website URL
  baseUrl: '/miliband-components/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JacobWeinbren',
  projectName: 'miliband-components',
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/nightOwlLight'),
    },
    colorMode: {
      disableSwitch: true
    },
    navbar: {
        title: 'Miliband Components',
        logo: {
          alt: 'My Site Logo',
          src: 'img/2010miliband.jpg',
        },
    items: [
        {
          type: 'doc',
          docId: 'start/intro',
          position: 'left',
          label: 'Getting Started',
        },
        {
          type: 'doc',
          docId: 'styles/colours',
          position: 'left',
          label: 'Styles',
        },
        {
          type: 'doc',
          docId: 'components/button',
          position: 'left',
          label: 'Components',
        },
        {
          href: 'https://github.com/JacobWeinbren/miliband-components/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Miliband Components',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'TSR Site',
              href: 'https://thesocialreview.co.uk',
            },
            {
              label: 'TSR Facebook',
              href: 'https://www.facebook.com/socreview/',
            },
            {
              label: 'TSR Twitter',
              href: 'https://twitter.com/SocReview',
            },
          ],
        },
        {
          title: 'Code',
          items: [
            {
              label: 'Miliband Components',
              href: 'https://github.com/JacobWeinbren/miliband-components/',
            },
          ],
        }
      ],
      copyright: `MIT License © ${new Date().getFullYear()} Miliband Components. Built with Docusaurus.`,
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/JacobWeinbren/miliband-components/tree/main/site',
        },
        theme: {
          customCss: [require.resolve('../dist/styles/theme.css'), require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
};
