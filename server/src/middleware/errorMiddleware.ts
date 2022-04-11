import {Request, Response} from 'express';
import {ApiError} from '../errors/ApiError';

export default function (
  err: Error,
  req: Request,
  res: Response,
  next: Function
) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({message: err.message});
  }

  return res.status(500).json({message: 'Непредвиденная ошибка'});
}
