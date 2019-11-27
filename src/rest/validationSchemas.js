import joi from '@hapi/joi';

import validate from './validator';

export const loginValidator = validate({
  body: {
    email: joi.string().email().required(),
    password: joi.string().required(),
  },
});

export const signupValidagor = validate({
  body: {
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().required(),
  },
});

export const createRecipeValidator = validate({
  body: {
    name: joi.string().required(),
    description: joi.string().required(),
    ingredients: joi.array().required(),
    direction: joi.array().required(),
  },
});

export const updateRecipeValidator = validate({
  body: {
    name: joi.string().optional(),
    description: joi.string().optional(),
    ingredients: joi.array().optional(),
    direction: joi.array().optional(),
  },
  params: {
    id: joi.number().required(),
  },
});

export const getRecipeValidator = validate({
  params: {
    id: joi.number().required(),
  },
});

export const deleteRecipeValidator = validate({
  params: {
    id: joi.number().required(),
  },
});

export const allRecipeValidator = validate({
  query: {
    limit: joi.number().optional(),
    offset: joi.number().optional(),
    page: joi.number().optional(),
  },
});

export default { loginValidator };
