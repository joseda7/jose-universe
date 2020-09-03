const dotenv = require('dotenv');
const metaInfo = require('./src/shared/meta');
const manifest = require('./src/shared/manifest');
const contentConfig = require('./src/shared/config/content-config');
const envVariablesConfig = require('./src/shared/config/env-config');

require("ts-node").register({ files: true })

let activeEnv = process.env.GATSBY_ACTIVE_ENV || "development";
console.log(':::::activeEnv ' + activeEnv);

if ("development" === activeEnv) {
   dotenv.config({ path: `./src/shared/env/.env.${activeEnv}` });
} else {
   dotenv.config({ path: `./src/shared/env/.env` });
}

module.exports = {
   siteMetadata: metaInfo,
   plugins: [
      manifest,
      contentConfig,
      envVariablesConfig,
      `gatsby-plugin-sass`,
      `gatsby-plugin-react-helmet`,
      {
         resolve: 'gatsby-plugin-eslint',
         options: {
            test: /\.js$|\.jsx$|.tsx$/,
            exclude: /(node_modules|.cache|public)/,
            stages: ['develop'],
            options: {
               emitWarning: true,
               failOnError: false
            }
         }
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/src/assets/images`,
         },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
         resolve: `gatsby-plugin-typescript`,
         options: {
         isTSX: true, // defaults to false
         jsxPragma: `React`, // defaults to "React"
         allExtensions: true, // defaults to false
         },
      },
      {
         resolve: `gatsby-plugin-canonical-urls`,
         options: {
            siteUrl: process.env.SITE_URL,
         },
      },
      //  {
      //    resolve: 'gatsby-plugin-google-marketing-platform',
      //    options: {
      //      includeInDevelopment: false,
      //      tagmanager: {
      //        id: process.env.GTM_ID,
      //      },
      //      optimize: {
      //        id: process.env.GTM_ID,
      //      },
      //    },
      //  },
      // `gatsby-plugin-offline`,
   ],
}
