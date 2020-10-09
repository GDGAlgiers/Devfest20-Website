module.exports = {
  siteMetadata: {
    title: `Devfest20`,
    description: `GDG DevFests are large community-run developer events happening around the globe focused on community building and learning about Google’s technologies. We organize DevFest 2020 in its 8th edition to offer speaker sessions, codelabs, workshops and a fascinating development challenges in all fields.`,
    author: `@GDG_Algiers`,
    siteUrl: "https://devfest20-gdgalgiers-1.netlify.app",
    keywords: [
      "GDG",
      "Devfest",
      "Algiers",
      "Algeria",
      "Dev",
      "Development",
      "Technology",
      "Technologies",
      "Web",
      "Mobile",
      "Machine Learning",
      "Information",
    ],
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Cairo", "Open Sans", "Roboto", "Montserrat"],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-next-seo`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/index.css"],
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-tailwind-styled-components`,
        short_name: `tailwindsc`,
        start_url: `/`,
        background_color: `#191C48`,
        theme_color: `#191C48`,
        display: `standalone`,
        icon: `docs/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop", "build-javascript"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
