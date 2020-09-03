module.exports = {
   resolve: `gatsby-plugin-env-variables`,
   options: {
      whitelist: [
         "LOCALE",
         "SITE_DEV",
         "SITE_STG",
         "SITE_URL",
         // "GOOGLE_SITE_VERIFICATION"
      ]
   },
}
