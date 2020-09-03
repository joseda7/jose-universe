const dotenv = require('dotenv');

let activeEnv = process.env.GATSBY_ACTIVE_ENV || "development";

if ("development" === activeEnv) {
  dotenv.config({ path: `./src/shared/env/.env.${activeEnv}` });
} else {
  dotenv.config({ path: `./src/shared/env/.env` });
}

module.exports = {
  resolve: `gatsby-source-contentful`,
  options: {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    environment: process.env.ENVIRONMENT === 'PDN' ? 'master' : 'develop',
  },
};