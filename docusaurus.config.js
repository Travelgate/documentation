// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Travelgate Docs',
  tagline: 'For humans, by humans.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.travelgate.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'travelgate', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins:[
    // [
    //   require.resolve("@cmfcmf/docusaurus-search-local"),
    //   {
    //     indexDocSidebarParentCategories: 10,
    //   }
    // ],
    'docusaurus-plugin-sass',
    [
      "@graphql-markdown/docusaurus",
      {
        // ... other options
        schema: 'https://api.travelgatex.com',
        rootPath: "./api",
        baseURL: "/",
        linkRoot: "/api",
        pretty: true,
        //homepage: "./docs/api-reference.md",
        loaders: {
          UrlLoader: {
            module: "@graphql-tools/url-loader",
          }
        }
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'kb',
        path: 'kb',
        routeBasePath: 'kb',
        sidebarPath: require.resolve('./sidebarsKb.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./api/sidebar-schema.js'),
        admonitions: {
          tag: ':::'
        }
        // ... other options
      },
    ],
    'custom-loaders'
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        ignoreFiles: ['404.html', 'markdown-page', 'playground', 'search'],
        hashed: true,
        indexBlog: false,
        explicitSearchResultPath: true,
        docsDir: ["docs", "api", "kb"],
        // searchContextByPaths: ["docs", "api", "kb"],
        highlightSearchTermsOnTargetPage: true,
        // docsPluginIdForPreferredVersion: "docs",
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Travelgate/documentation/tree/main',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/scss/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Travelgate Docs',
        logo: {
          alt: 'Travelgate',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/kb',
            //type: 'docSidebar',
            sidebarId: 'kbSidebar',
            label: 'Knowledge Base',
            position: 'left'
          },
          {
            to: '/api',
            //type: 'docSidebar',
            sidebarId: 'schemaSidebar',
            label: 'GraphQL API Reference',
            position: 'left'
          },
          {
            to: '/playground',
            //type: 'docSidebar',
            //sidebarId: 'schemaSidebar',
            label: 'GraphQL Playground',
            position: 'left'
          },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Travelgate. Built for humans, by humans.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
