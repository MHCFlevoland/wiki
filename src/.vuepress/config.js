const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Wiki MHCFlevoland",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "https://github.com/MHCFlevoland/wiki",
    editLinks: true,
    docsDir: "/src",
    editLinkText: "Pas pagina aan!",
    lastUpdated: false,
    nav: [
      {
        text: "Website",
        link: "/website/",
      },
      {
        text: "ClubApp",
        link: "/clubapp/",
      },
      {
        text: "MHCFlevoland",
        link: "https://MHCFlevoland.nl/",
      },
    ],
    sidebar: {
      "/clubapp/": [
        {
          title: "ClubApp",
          collapsable: true,
          children: ["", "account", "faq"],
        },
      ],
      "/website/": [
        {
          title: "Website",
          collapsable: true,
          children: [""],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
