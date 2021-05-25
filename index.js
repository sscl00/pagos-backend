// dependencies server
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

// other dependencies
import config from './config/envServer';
import root from './routes/root';
import userAPI from './routes/api/users';

import Response from './utils/log';
import ServerError from './utils/error';

// middleware handlers
import logErrors from './middleware/errorHandlers';
import cacheResponse from './middleware/cacheHandler';

// server configuration
const app = express();
const { port, clientURL, mode } = config;

// middlewares
if (mode === 'dev') app.use(cors());
else
    app.use(
        cors({
            origin: clientURL
        })
    );
app.use(express.json());
app.use(cacheResponse);
app.use(helmet());

// routes
app.use('/', root);
app.use('/api/user', userAPI);

app.use((req, res, next) => {
    next(
        new ServerError('error not found', 404, 'ClientError').response(
            'bad request'
        )
    );
});

// error handlers
app.use(logErrors);

// server scope
if (mode !== 'test') app.listen(port, () => Response.listen());
export default app;