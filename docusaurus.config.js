// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Travelgate Docs",
  tagline: "For humans, by humans.",
  favicon: "img/favicon.ico",
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true, // required
    },
    experimental_faster: true,
  },
  // Set the production url of your site here
  url: "https://docs.travelgate.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "travelgate", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap",
      },
    },

    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap",
      },
    },

    //OPEN GRAPH
    {
      tagName: "meta",
      attributes: {
        property: "og:title",
        content: "Travelgate Docs | Developer API Documentation",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:description",
        content:
          "Explore comprehensive API documentation, integration instructions, and technical support for Travelgate's platform",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:type",
        content: "website",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:url",
        content: "https://docs.travelgate.com/",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:image",
        content: "https://docs.travelgate.com/img/docusaurus-social-card.jpg",
      },
    },

    //Twitter Card
    {
      tagName: "meta",
      attributes: {
        name: "twitter:card",
        content: "summary_large_image",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:title",
        content: "Travelgate Docs | Developer API Documentation",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:description",
        content:
          "Full API documentation and integration guides for the Travelgate platform. Build fast, scale globally",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:image",
        content: "https://docs.travelgate.com/img/docusaurus-social-card.jpg",
      },
    },

    // Structured Data: WebSite
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: `
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Travelgate",
            "url": "https://www.travelgate.com/",
            "inLanguage": "en",
            "isAccessibleForFree": true,
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.travelgate.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
          `,
    },

    // Structured Data: Organization
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: `
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Travelgate",
        "url": "https://www.travelgate.com/",
        "logo": "https://www.travelgate.com/assets/img/logos/logo_tg_positive.svg",
        "sameAs": [
          "https://www.linkedin.com/company/travelgate",
          "https://x.com/travelgate",
          "https://www.facebook.com/travelgate"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "url": "https://team.travelgate.com/contact-us",
          "contactType": "New Partner Inquiries",
          "areaServed": "Worldwide",
          "availableLanguage": ["English", "Spanish"]
        }
      }
      `,
    },

    // Structured Data: FAQPage
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: `
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Travelgate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Travelgate is a travel technology platform that enables B2B connectivity between travel agencies, suppliers, and distributors via seamless API integrations."
                }
              },
              {
                "@type": "Question",
                "name": "What services does Travelgate provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Travelgate offers API connectivity, inventory distribution, hotel and channel manager integrations, and technical support for global travel businesses."
                }
              },
              {
                "@type": "Question",
                "name": "Is Travelgate suitable for small travel agencies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Travelgate offers scalable solutions suitable for businesses of all sizes, including small travel agencies looking to expand their reach and streamline operations."
                }
              },
              {
                "@type": "Question",
                "name": "Does Travelgate offer technical support during integration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our technical team provides full support during the integration process to ensure smooth setup and operation of APIs and services."
                }
              },
              {
                "@type": "Question",
                "name": "What types of suppliers can I connect with through Travelgate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Connect seamlessly with a diverse network of suppliers—from tour operators and travel agencies to channel managers—through the Travelgate platform."
                }
              }
            ]
          }
          `,
    },

    // Structured Data: BreadcrumbList
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: `
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.travelgate.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Solutions",
            "item": "https://www.travelgate.com/solutions"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Platform",
            "item": "https://www.travelgate.com/platform"
          }
        ]
      }
      `,
    },
  ],

  scripts: [
    "https://kit.fontawesome.com/e1e13599a5.js",
    {
      src: "https://widget.kapa.ai/kapa-widget.bundle.js",
      defer: true,
      "data-website-id": "22c9d321-f9d2-48e3-958b-a5789f17c4b7",
      "data-project-name": "Travelgate",
      "data-project-color": "#0B59DE",
      "data-project-logo": "/img/ask_ia.svg",
      "data-modal-disclaimer":
        "AIna, Travelgate's multilingual AI assistant, provides quick answers and troubleshooting guidance based on our official documentation. For the most precise and helpful response, please describe your inquiry clearly and in detail. While we strive for thoroughness, AI-generated responses may not always be perfect. They are provided as is, and Travelgate disclaims any liability for inaccuracies. Please use discretion.",
      "data-user-analytics-fingerprint-enabled": "true",
      "data-user-analytics-store-ip": "true",
      "data-button-text": " ",
      "data-button-width": "13rem",
      "data-button-height": "2.5rem",
      "data-button-image-width": "170",
    },
  ],

  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-ECHYSGVN82",
        anonymizeIP: true,
      },
    ],
    [
      "@graphql-markdown/docusaurus",
      {
        schema: "./schemas/filtered-schema.graphql",
        rootPath: "./api",
        baseURL: "/",
        linkRoot: "/api",
        loaders: {
          GraphQLFileLoader: "@graphql-tools/graphql-file-loader", // local file schema
        },
        // pretty: true,
        // forceSchema: true,
        // force: true,
        // loaders: {
        //   UrlLoader: {
        //     module: "@graphql-tools/url-loader",
        //     options: {
        //       headers: {
        //         Authorization: "Apikey " + TRAVELGATE_API_KEY,
        //       }
        //     }
        //   }
        // }
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "kb",
        path: "kb",
        routeBasePath: "kb",
        sidebarPath: require.resolve("./sidebarsKb.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api",
        path: "api",
        routeBasePath: "api",
        sidebarPath: require.resolve("./api/sidebar-schema.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-sitemap",
      {
        id: "sitemap",
        lastmod: "date",
        changefreq: "weekly",
        priority: 0.5,
        ignorePatterns: ["/tags/**"],
        filename: "sitemap.xml",
        createSitemapItems: async (params) => {
          const { defaultCreateSitemapItems, ...rest } = params;
          const items = await defaultCreateSitemapItems(rest);
          return items.filter((item) => !item.url.includes("/page/"));
        },
      },
    ],
    "custom-loaders",
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        ignoreFiles: ["404.html", "markdown-page", "playground", "search"],
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
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Travelgate/documentation/tree/main",
        },
        blog: false,
        theme: {
          customCss: [
            "./node_modules/graphiql/dist/style.css",
            require.resolve("./src/scss/custom.scss"),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Travelgate Docs",
        logo: {
          alt: "Travelgate",
          src: "img/logo.svg",
        },
        items: [
          {
            //to: '/',
            //activeBasePath: 'docs',
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            to: "/kb",
            //type: 'docSidebar',
            sidebarId: "kbSidebar",
            label: "Knowledge Base",
            position: "left",
          },
          {
            to: "/api",
            //type: 'docSidebar',
            sidebarId: "schemaSidebar",
            label: "GraphQL API Reference",
            position: "left",
          },
          {
            to: "/playground",
            //type: 'docSidebar',
            sidebarId: "playgroundSidebar",
            label: "GraphQL Playground",
            position: "left",
          },
          {
            to: "/ask-ai",
            //type: 'docSidebar',
            sidebarId: "askAiSidebar",
            label: "Ask AI",
            position: "left",
          },
          {
            to: "https://app.travelgate.com/tickets",
            //type: 'docSidebar',
            sidebarId: "supportCenterSidebar",
            label: "Support Center",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Travelgate.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ["csharp"], // Agregar soporte para C#
      },
    }),
};

module.exports = config;
