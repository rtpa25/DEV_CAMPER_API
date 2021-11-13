/** @format */

import express, { Application } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

//Route Files
import bootcampRouter from './routes/bootcamp';

//load env variables
dotenv.config({ path: './config/config.env' });

//initiation
const app: Application = express();
const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV || 'development';

//Mount Routers {always give a fucking "/" before api}
app.use('/api/v1/bootcamps', bootcampRouter);

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.listen(PORT, () => {
  console.log(`Server running in ${MODE} at port ${PORT}`);
});
