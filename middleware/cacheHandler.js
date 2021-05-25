// dependencies cache
import config from '../config/envServer';

// cache configuration
const { mode, cacheTimingSeconds } = config;

const cacheResponse = (req, res, next) => {
    if (mode === 'dev') res.set('Cache-Control', `public, max-age=${cacheTimingSeconds}`);
    else res.set('Cache-control', `no-store`);
    next();
};

export default cacheResponse;
