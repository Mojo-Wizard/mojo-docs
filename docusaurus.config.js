// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const siteUrl = process.env.SITE_URL || "https://mojo-docs.com";
const structuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mojo Docs",
  url: siteUrl,
  description:
    "Curated Mojo resources, community guides, and project docs all in one place.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en",
});

function structuredDataPlugin() {
  return {
    name: "mojo-structured-data",
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "script",
            attributes: {
              type: "application/ld+json",
            },
            innerHTML: structuredData,
          },
        ],
      };
    },
  };
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mojo Docs - Curated Mojo Learning Hub",
  tagline:
    "Independent guides, official doc pointers, and community project notes",
  url: siteUrl,
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mojo-wizard",
  projectName: "Mojo Programming Language Documentation",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.7,
          filename: "sitemap.xml",
          ignorePatterns: ["/tags/**"],
        },
      },
    ],
  ],

  plugins: [structuredDataPlugin],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo.svg",
      metadata: [
        {
          name: "description",
          content:
            "Mojo Docs is a playful hub pointing to the best official docs, community guides, and project write-ups for Mojo.",
        },
        {
          name: "keywords",
          content:
            "Mojo programming language, Modular, Mojo guides, project docs, GPU programming",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: "Mojo Docs – Curated Mojo Learning Hub",
        },
        {
          property: "og:description",
          content:
            "Independent, curated links, community guides, and project docs to help you explore the Mojo ecosystem.",
        },
        {
          property: "og:url",
          content: siteUrl,
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "author",
          content: "Mojo Docs community",
        },
        {
          name: "theme-color",
          content: "#d94600",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Mojo Docs",
        },
        {
          name: "twitter:description",
          content:
            "Independent, curated links, community guides, and project docs to help you explore the Mojo ecosystem.",
        },
        {
          name: "twitter:image",
          content: `${siteUrl}/img/logo.svg`,
        },
      ],
      navbar: {
        title: "Mojo Docs",
        logo: {
          alt: "Mojo Docs flame mark",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Docs",
          },
          {
            to: "/projects",
            label: "Projects",
            position: "left",
          },
          {
            to: "/about",
            label: "About",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Overview",
                to: "/docs/",
              },
              {
                label: "Language basics",
                to: "/docs/modular-language-basics",
              },
              {
                label: "Standard library",
                to: "/docs/modular-standard-library",
              },
              {
                label: "MAX & GPU",
                to: "/docs/modular-max-ai",
              },
              {
                label: "Tooling notes",
                to: "/docs/modular-tools",
              },
              {
                label: "Community guides",
                to: "/docs/community-guides/",
              },
              {
                label: "Project docs",
                to: "/docs/project-docs/",
              },
            ],
          },
          {
            title: "Site",
            items: [
              {
                label: "About",
                to: "/about",
              },
              {
                label: "Community & blog picks",
                to: "/docs/community-and-blog",
              },
            ],
          },
          {
            title: "Official resources",
            items: [
              {
                label: "Modular Mojo docs",
                href: "https://docs.modular.com/mojo/",
              },
              {
                label: "Modular MAX docs",
                href: "https://docs.modular.com/mojo/max/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mojo Docs. Maintained with love.`,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["python", "rust"],
      },
    }),
};

module.exports = config;
