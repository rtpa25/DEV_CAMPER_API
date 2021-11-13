/** @format */

import express, { Request, Response } from 'express';
import {
  getBootcamps,
  getBootcamp,
  updateBootcamp,
  postBootcamp,
  deleteBootcamp,
} from '../controlers/bootcamp';

const bootcampRouter = express.Router();

bootcampRouter.route('/').get(getBootcamps).post(postBootcamp);

bootcampRouter
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

export default bootcampRouter;
