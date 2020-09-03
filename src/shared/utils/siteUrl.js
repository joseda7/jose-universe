export const siteUrl = (
    process.env.ENVIRONMENT === 'PDN' ?
        process.env.SITE_URL
        :
        process.env.ENVIRONMENT === 'STG' ?
            process.env.SITE_STG
            :
            process.env.SITE_DEV
)