/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Calendso Documentation',
  tagline: 'The official product and developer documentation.',
  url: 'https://docs.calendso.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'calendso', // Usually your GitHub org/user name.
  projectName: 'calendso', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Calendso',
      logo: {
        alt: 'Calendso Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'installation',
          position: 'left',
          label: 'Product Documentation',
        },
        {href: 'https://api.docs.calendso.com', label: 'API Documentation', position: 'left'},
        {to: '/blog', label: 'Releases', position: 'left'},
        {
          href: 'https://github.com/calendso/calendso',
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
              label: 'Installation',
              to: '/docs/installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/calendso/shared_invite/zt-mem978vn-RgOEELhA5bcnoGONxDCiHw',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/calendso/calendso',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/calendso',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/calendso/calendso',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Calendso.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/calendso/docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/calendso/docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
