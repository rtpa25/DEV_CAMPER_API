/** @format */

import { Request, Response, NextFunction } from 'express';

// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
export const getBootcamps = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({
    success: true,
    msg: 'Show all bootcamps',
  });
};

// @desc Get a bootcamp
// @route GET /api/v1/bootcamp/:id
// @access Public
export const getBootcamp = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({
    success: true,
    msg: `show bootcamp ${req.params.id}`,
  });
};

// @desc post a bootcamp
// @route POST /api/v1/bootcamps/
// @access Private
export const postBootcamp = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({
    success: true,
    msg: `post a bootcamp `,
  });
};

// @desc Update a specific bootcamp
// @route PUT /api/v1/bootcamps
// @access Private
export const updateBootcamp = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({
    success: true,
    msg: `Update bootcamp ${req.params.id}`,
  });
};

// @desc Delete a specific bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private
export const deleteBootcamp = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({
    success: true,
    msg: `Delete bootcamp ${req.params.id}`,
  });
};
