/** @format */

import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: './config/config.env' });

const app: Application = express();
const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV || 'development';

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running in ${MODE} at port ${PORT}`);
});
