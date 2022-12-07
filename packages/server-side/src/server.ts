import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import RouteControllers from './routes/routes';

const PORT: string = (process.env.PORT as string);
const API_URL: string = (process.env.API_URL as string);

const server: Application = express();

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: API_URL,
  preflightContinue: false,
};

server.set('port', PORT || 3015);

server.use(express.json());
server.use(morgan('dev'));
server.use(cors(options));

server.use('/api/', RouteControllers);

export default server;











