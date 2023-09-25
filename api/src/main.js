import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { createServer } from 'http';
import logger from 'morgan';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import router from './routers';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

global.__basedir = __dirname;

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(logger('dev'));
app.use(cors());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    xPoweredBy: false,
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public/uploads'));

const server = createServer(app);

app.get('/', (req, res) => {
  res.send('Hello World! This is backend');
});

app.use('/api', router);
app.use('/file', express.static('public/uploads'));

server.listen(port, () => {
  console.log('Server listening http://localhost:' + port);
});
