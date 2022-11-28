import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import RouteControllers from './routes/routes';

const PORT: string = (process.env.PORT as string);

const server: Application = express();

server.set('port', PORT || 3015);

server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

server.use('/api/', RouteControllers);

export default server;











