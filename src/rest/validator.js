import joi from '@hapi/joi';

import { errorResponse } from './helpers';

export default function validatorMiddleWare(schema) {
  return (req, res, next) => {
    let hasError = false;
    Object.keys(schema).forEach((field) => {
      const result = joi.object({ ...schema[field] }).validate({ ...req[field] }, {
        presence: 'required',
        abortEarly: false,
        language: {
          key: `[{{key}}] in request ${field} `,
        },
        convert: true,
      });

      if (result.error) {
        hasError = true;
        const error = result.error.details.map((err) => err.message);
        errorResponse(res, 400, { error });
      }
    });

    if (hasError) {
      return hasError;
    }
    return next();
  };
}
