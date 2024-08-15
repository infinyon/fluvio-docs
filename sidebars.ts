import type {
  SidebarsConfig,
  PropSidebarItemHtml,
} from "@docusaurus/plugin-content-docs";

const makeDocsHeading = ({
  name,
}: {
  name: string;
}): PropSidebarItemHtml => {
  const value = `
      <li style="padding: .5rem 0;">
        <span style="padding-top: 1rem; display: flex; justify-content: flex-start; align-items: center; padding: .15rem .75rem;" aria-current="page">
          <span style="text-transform: uppercase; font-size: 1rem; font-weight: 600;">${name}</span>
        </span>
      </li>`;

  return {
    type: "html",
    value,
  };
};

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  fluvio: [
    makeDocsHeading({
      name: "Fluvio",
    }),
    {
      type: "autogenerated",
      dirName: "fluvio",
    },
    {
      type: "link",
      label: "News",
      href: "/news",
    },
  ],
  cloud: [
    makeDocsHeading({
      name: "Cloud",
    }),
    {
      type: "autogenerated",
      dirName: "cloud",
    },
  ],
  connectors: [
    makeDocsHeading({
      name: "Connectors",
    }),
    {
      type: "autogenerated",
      dirName: "connectors",
    },
  ],
  smartmodules: [
    makeDocsHeading({
      name: "SmartModules",
    }),
    {
      type: "autogenerated",
      dirName: "smartmodules",
    },
  ],
  hub: [
    makeDocsHeading({
      name: "Hub",
    }),
    {
      type: "autogenerated",
      dirName: "hub",
    },
  ]
};

export default sidebars;
