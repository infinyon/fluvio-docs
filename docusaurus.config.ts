import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const FLUVIO_REPOSITORY_URL = "https://github.com/InfinyOn/fluvio";

const config: Config = {
  title: "Fluvio",
  tagline: "The programmable data streaming platform",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://.pages.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "InfinyOn", // Usually your GitHub org/user name.
  projectName: "fluvio", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        href: "https://fonts.googleapis.com/css2?family=Spline+Sans+Mono&display=swap",
        rel: "stylesheet",
      },
    },
    {
      tagName: "link",
      attributes: {
        href: "https://fonts.googleapis.com/css2?family=Rubik&display=swap",
        rel: "stylesheet",
      },
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/infinyon/fluvio-docs/tree/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    docs: {
      sidebar: {
         autoCollapseCategories: true,
      }
    },
    navbar: {
      logo: {
        alt: "InfinyOn Logo",
        src: "img/infinyon-with-text.svg",
        srcDark: "img/infinyon-with-text-white.svg",
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'fluvio/quickstart',
          label: 'Fluvio',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'sdf/quickstart',
          label: 'SDF',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'connectors/introduction',
          label: 'Connectors',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'apis/index',
          label: 'APIs',
        },
        {
          type: 'custom-GitHubStars',
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Fluvio",
          items: [],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/fluvio",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/bBG2dTz",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/infinyon",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: FLUVIO_REPOSITORY_URL,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} InfinyOn, Inc. All rights reserved.`,
    },
    prism: {
      additionalLanguages: [
        'bash',
        'java',
        'python',
        'rust',
        'toml',
        'yaml'
      ],
    },
  } satisfies Preset.ThemeConfig,
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        docsRouteBasePath: '/'
      },
    ],
  ],
};

export default config;
