import dotenv from 'dotenv';

dotenv.config();

function jsonResponse(res, statusCode, obj) {
  res.status(statusCode).json(obj);
}

export function errorResponse(res, statusCode, message) {
  jsonResponse(res, statusCode, { message });
}

export function successResponse(res, statusCode, data) {
  jsonResponse(res, statusCode, data);
}

export function serverError(res, error, statusCode = 500) {
  const resError = {
    message: 'Internal server error',
    detail: error,
  };

  if (process.env.NODE_ENV === 'production') {
    resError.details = null;
  }
  jsonResponse(res, statusCode, resError);
}
