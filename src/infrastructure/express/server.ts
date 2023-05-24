import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import router from './express.router';

export const serverMongo = async () => {
  const app = express();

  app.use(
    cors({
      credentials: true,
    })
  );

  app.use(compression());

  app.use(bodyParser.json());

  const server = http.createServer(app);

  server.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
  });

  app.use('/', router());
};
