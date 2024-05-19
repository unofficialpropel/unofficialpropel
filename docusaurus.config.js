// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Unofficial Propel",
  tagline: "Resources, Help, and Code Sharing for Propel Software",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: 'https://unofficialpropel.com"',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "unofficialpropel", // Usually your GitHub org/user name.
  projectName: "unofficialpropel", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "resources",
          routeBasePath: "resources",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/unofficialpropel/unofficialpropel/edit/main/",
        },
        blog: {
          path: "./updates",
          routeBasePath: "updates",
          showReadingTime: true,
          editUrl:
            "https://github.com/unofficialpropel/unofficialpropel/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: { trackingID: "G-8SLEKZZS4E" },
        pages: {},
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Unofficial Propel",
        logo: {
          alt: "Unofficial Propel Logo",
          src: "img/ufp.png",
        },
        items: [
          { to: "about", label: "About", position: "left" },
          { to: "resources/", label: "Resources", position: "left" },
          { to: "updates", label: "Updates", position: "left" },
          {
            href: "https://pug.unofficialpropel.com",
            label: "Propel User Group",
            position: "right",
          },
          {
            href: "https://propelsoftware.com",
            label: "Propel Software",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Propel User Group",
                href: "https://pug.unofficialpropel.com",
              },
              {
                label: "GitHub",
                href: "https://github.com/unofficialpropel/",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              { label: "Notifications", to: "resources/notifications" },
              { label: "Tools", to: "resources/tools" },
            ],
          },
          {
            title: "Learn",
            items: [
              {
                label: "Salesforce Trailhead",
                href: "https://trailhead.salesforce.com/",
              },
              {
                label: "Propel Help",
                href: "https://help.propelsoftware.com/",
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
