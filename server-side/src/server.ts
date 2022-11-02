import express, { Application } from 'express';
import morgan from 'morgan';

import RouteControllers from './routes/routes';

const server: Application = express();

// Settings
server.set('port', 3005 || process.env.PORT);

// Middlewares
server.use(express.json());
server.use(morgan('dev'));

// Routes
server.use('/api/', RouteControllers);

export default server;