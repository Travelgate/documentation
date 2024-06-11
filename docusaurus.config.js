// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

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

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap',
      },
    },
  ],

  scripts: [
    'https://kit.fontawesome.com/e1e13599a5.js',
    {
      src: 'https://widget.kapa.ai/kapa-widget.bundle.js',
      defer: true,
      'data-website-id': '22c9d321-f9d2-48e3-958b-a5789f17c4b7',
      'data-project-name': 'Travelgate',
      'data-project-color': '#0B59DE',
      'data-project-logo': 'https://cdn-images-1.medium.com/v2/resize:fit:1200/1*_Y8EEzS2C00NePogZVB2vQ.png',
      'data-modal-disclaimer': 'This is a custom LLM for answering questions about Travelgate. Answers are based on the contents of the documentation. This feature is experimental - rate the answers to let us know what you think!',
    }
  ],

  plugins:[
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-ECHYSGVN82',
        anonymizeIP: true,
      },
    ],
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
            options: {
              headers: {
                Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5UZzBPREJGTVRSQ1JURXdOVFEyUkRBek9UbEJRemN4TkVZMU5EUkRPVVJCTVVNMlJqZzVPQSJ9.eyJodHRwczovL3RyYXZlbGdhdGV4LmNvbS9pYW0iOlt7ImEiOm51bGwsImMiOiJ4dGciLCJnIjpbeyJhIjp7ImFsbCI6eyJhbGwiOnsiYWxsIjpbImNydWQxeGEiXX19fSwiYyI6InN0YWZmIiwiZyI6bnVsbCwicCI6eyJpYW0iOnsiZ3JwIjpbInIxIl0sIm1iciI6WyJyMSJdfX0sInQiOiJURUFNIn0seyJhIjp7ImFsbCI6eyJhbGwiOnsiYWxsIjpbImNydWQxYSJdfX19LCJjIjoiYWRtaW4iLCJnIjpudWxsLCJwIjp7ImlhbSI6eyJncnAiOlsicjEiXSwibWJyIjpbInIxIl19fSwidCI6IlRFQU0ifV0sInAiOm51bGwsInQiOiJST09UIn1dLCJodHRwczovL3RyYXZlbGdhdGV4LmNvbS9tZW1iZXJfaWQiOiJjYWxpbkB0cmF2ZWxnYXRlLmNvbSIsImh0dHBzOi8vdHJhdmVsZ2F0ZXguY29tL2lzX3RneCI6dHJ1ZSwiaHR0cHM6Ly90cmF2ZWxnYXRleC5jb20vb3JnIjpbeyJvIjoidGd4IiwiciI6IkVESVRPUiJ9XSwibmlja25hbWUiOiJjYWxpbiIsIm5hbWUiOiJjYWxpbkB0cmF2ZWxnYXRlLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iMDkwYmQ5Zjk2ZmU3MmRiMWMyM2NiNDkzZmVhYzAyYj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmNhLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDI0LTA1LTMxVDA1OjM2OjAyLjQ3M1oiLCJlbWFpbCI6ImNhbGluQHRyYXZlbGdhdGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8veHRnLmV1LmF1dGgwLmNvbS8iLCJhdWQiOiJERGtyNTZ3bmZxWW5PTjZMZHZUT21aQlJrZXZZZ1lNdiIsImlhdCI6MTcxNzEzMzc5NiwiZXhwIjoxNzE3MTY5Nzk2LCJzdWIiOiJhdXRoMHw2M2I1ODExNWJiNDU5NmRkNmRmMGVjYzAiLCJhY3IiOiJodHRwOi8vc2NoZW1hcy5vcGVuaWQubmV0L3BhcGUvcG9saWNpZXMvMjAwNy8wNi9tdWx0aS1mYWN0b3IiLCJhbXIiOlsibWZhIl0sImF0X2hhc2giOiJXQ0xCUkVZMFJibnh5SlFKdE1ZQTB3Iiwic2lkIjoiLVlqQnVKd0hiOGdoODdzd1pDc1hXRVZ2WWtpZ0c3UW8iLCJub25jZSI6Im1-Ui1NMy1mWDUxUE8tYlZsUW1lUWVIdmd5OHh4OVBOIn0.N39mjt4_01JJAT6zn1e48vVn9swHN9aunuRnPJM24Fz87rqKDWYy35gQogJ_k7yItyIYdg7j2nUQNsNjUZIwU2Y3ZuXBFXskNlVa1RmXF36nQ4VYiFy22bCnLc8nxQ9gfAXETwOyKhqLXYK0k8NuePcVCILWC1TU2Dy6yLUj_v24HmAwmBUIvlDctTn-0uNdAaHbwx_rRwERAvpRupslBpEOTlWYRWxf1Nx4H7oCeXcal2-ttIzPJjuzZVPkC0nF513sl9A9GJrYbuTP9a7vefvVpxXrwlyAQkS6SYeEt8SSsMRjD3mC9MObB_S0_isD4gzVOk8iFWIvN9_KcoONgw`,
              }
            }
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
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        id:"sitemap",
        lastmod: 'date',
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
        createSitemapItems: async (params) => {
          const {defaultCreateSitemapItems, ...rest} = params;
          const items = await defaultCreateSitemapItems(rest);
          return items.filter((item) => !item.url.includes('/page/'));
        },
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
        docsRouteBasePath: "/",
        //searchContextByPaths: ["docs", "api", "kb"],
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
            //to: '/',
            //activeBasePath: 'docs',
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
            sidebarId: 'playgroundSidebar',
            label: 'GraphQL Playground',
            position: 'left'
          },
          {
            to: 'https://app.travelgate.com/tickets',
            //type: 'docSidebar',
            sidebarId: 'supportCenterSidebar',
            label: 'Support Center',
            position: 'left'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Travelgate.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
};

module.exports = config;
