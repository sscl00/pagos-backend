require('dotenv').config();

export default {
    appName: process.env.APP_NAME,
    clientURL: process.env.SERVER_ORIGIN_URL,
    serverURL: process.env.SERVER_URL || `http://localhost:${process.env.PORT}`,
    port: process.env.PORT,
    mode: process.env.NODE_ENV,
    cacheTimingSeconds: process.env.CACHE_TIMING_SECONDS,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    sentryDns: process.env.SENTRY_DNS,
    authAdminUsername: process.env.AUTH_ADMIN_USERNAME,
    authAdminPassword: process.env.AUTH_ADMIN_PASSWORD,
    authAdminEmail: process.env.AUTH_ADMIN_EMAIL,
    authJWTSecret: process.env.AUTH_JWT_SECRET
};
