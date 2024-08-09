import type { Config } from "@docusaurus/types";

import tailwindPlugin from "./plugins/tailwind-plugin.cjs";

import type * as Preset from "@docusaurus/preset-classic";

const FLUVIO_REPOSITORY_URL = "https://github.com/InfinyOn/fluvio";

const STABLE_VERSION = "0.11.11";

const config: Config = {
  title: "Fluvio",
  tagline: "The programmable data streaming platform",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://fluvio.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "InfinyOn", // Usually your GitHub org/user name.
  projectName: "fluvio", // Usually your repo name.

  onBrokenLinks: "warn",
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
  plugins: [
    tailwindPlugin,
    // SDF Documentation
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "sdf",
        path: "sdf",
        routeBasePath: "sdf",
        sidebarPath: "./sidebarsSdf.ts",
      },
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-R7V7KJ5G2Z',
        anonymizeIP: true,
      },
    ],
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
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          versions: {
            current: {
              label: "latest",
              path: "latest",
            },
            [STABLE_VERSION]: {
              label: `${STABLE_VERSION} (stable)`,
            },
          },
        },
        blog: {
          path: "news",
          routeBasePath: "news",
          showReadingTime: true,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          blogSidebarTitle: "This Week in Fluvio",
          blogSidebarCount: "ALL",
          postsPerPage: 1,
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
      },
    },
    navbar: {
      logo: {
        alt: "InfinyOn Logo",
        src: "img/infinyon-gradient.png",
        srcDark: "img/infinyon-white.png",
        style: {
          padding: "10px 0",
        },
      },
      items: [
        {
          type: "doc",
          position: "left",
          docId: "fluvio/quickstart",
          label: "Fluvio",
        },
        {
          position: "left",
          label: "SDF",
          to: '/sdf',
        },
        {
          type: "doc",
          position: "left",
          docId: "cloud/overview",
          label: "Cloud",
        },
        {
          type: "doc",
          position: "left",
          docId: "connectors/quickstart",
          label: "Connectors",
        },
        {
          type: "doc",
          position: "left",
          docId: "apis/quickstart",
          label: "APIs",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          docsPluginId: "default",
        },
        // {
        //   type: "docsVersionDropdown",
        //   position: "right",
        //   docsPluginId: "sdf",
        // },
        {
          position: "right",
          to: "news",
          label: "News",
        },
        {
          type: "custom-Discord",
          position: "right",
        },
        {
          type: "custom-GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Fluvio",
          items: [
            {
              label: "Docs",
              href: "/docs/fluvio/quickstart",
            },
            {
              label: "FAQs",
              href: "/faqs",
            },
            {
              label: "News",
              href: "/news",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discordapp.com/invite/bBG2dTz",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/infinyon",
            },
            {
              label: "GitHub",
              href: FLUVIO_REPOSITORY_URL,
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/@InfinyOn/videos",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} InfinyOn, Inc. All rights reserved.`,
    },
    prism: {
      additionalLanguages: ["bash", "java", "python", "rust", "toml", "yaml"],
    },
  } satisfies Preset.ThemeConfig,
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        docsRouteBasePath: "/",
        indexPages: true,
      },
    ],
  ],
};

export default config;
