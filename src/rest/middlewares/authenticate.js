import { isValidToken } from '../../utils/jwt';
import { errorResponse } from '../helpers';


export function handleUnimplementedMethods(router) {
  return (req, res, next) => {
    const routes = router.stack
      .filter((route) => route && route.path === req.path)
      .filter((route) => route.methods[req.method]);
    if (routes.length < 1) {
      res.status(405).json({
        message: 'Method not implemented on this route',
      });
      return;
    }
    next();
  };
}


export default (req, res, next) => {
  const PUBLIC_ROUTES = [
    '/auth/login',
    '/auth/signup',
  ];
  const token = req.headers.authorization;
  if (
    PUBLIC_ROUTES.includes(req.path)
    || isValidToken(token)
    || `${req.method}`.toLocaleLowerCase() === 'get'
  ) {
    next();
    return;
  }
  errorResponse(res, 401, 'You are not authorized to access this route');
};
