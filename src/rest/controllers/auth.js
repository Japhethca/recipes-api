import { successResponse, errorResponse, serverError } from '../helpers';
import UserManager from '../../db/managers/User';
import { comparePassword } from '../../utils/hash';
import { createToken } from '../../utils/jwt';

const userManager = new UserManager();

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userManager.getUserByEmail(email);
    if (!user) {
      errorResponse(res, 404, 'user does not exist');
      return;
    }
    if (!comparePassword(password, user.password)) {
      errorResponse(res, 401, 'Invalid credentials');
      return;
    }
    const token = createToken({ id: user.id });
    successResponse(res, 200, { user, token });
  } catch (error) {
    serverError(res, error);
  }
}

export async function signup(req, res) {
  try {
    const { email } = req.body;
    const user = await userManager.getUserByEmail(email);
    if (user) {
      errorResponse(res, 409, 'User with credentials already exists.');
      return;
    }
    const createdUser = await userManager.createUser(req.body);
    const token = createToken({ id: createdUser.id });
    successResponse(res, 201, { createdUser, token });
  } catch (error) {
    serverError(res, error);
  }
}

export function fbLogin(req, res) {
  successResponse(res, 200, 'Awaiting implemenations');
}

export function googleLogin(req, res) {
  successResponse(res, 200, 'Awaiting implemenations');
}
