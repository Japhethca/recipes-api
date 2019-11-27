import {
  verify, decode, sign,
} from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secretKey = process.env.SECRET_KEY;

export function createToken(payload) {
  return sign(payload, secretKey, {
    expiresIn: '1d',
    issuer: 'recipe_app',
  });
}

export function isValidToken(token) {
  try {
    verify(token, secretKey, { issuer: 'recipe_app' });
    return true;
  } catch (error) {
    return false;
  }
}

export function decodeToken(token) {
  return decode(token);
}
