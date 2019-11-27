import bcrypt from 'bcrypt';

const SALT = 10;

export function hashPassword(password) {
  return bcrypt.hashSync(password, SALT);
}

export function comparePassword(password, hashedPass) {
  return bcrypt.compareSync(password, hashedPass);
}
