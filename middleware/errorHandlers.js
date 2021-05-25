// dependencies error handler
import * as Sentry from '@sentry/node';

// other dependencies
import config from '../config/envServer';

// handler sentry configuration
const { mode, sentryDns } = config;
Sentry.init({
    dsn: sentryDns,
    environment: mode,
    tracesSampleRate: 1.0
});

// error handler and send error data to Sentry
const logErrors = (err, req, res, next) => {
    const { code, error } = err;
    Sentry.captureException(err);
    console.log(error);
    res.status(code).json({ code, error });
};

export default logErrors;
