import express from 'express';
import passport from 'passport';

import { login, signup } from './controllers/auth';
import { loginValidator, signupValidagor } from './validationSchemas';

const router = express.Router();

router.post('/auth/login', loginValidator, login);
router.post('/auth/signup', signupValidagor, signup);
router.get('/auth/social', passport.authenticate('google', { scope: ['profile'] }));
// router.get('/auth/redirect',
//   // passport.authenticate(
//   //   'google',
//   //   { failureRedirect: 'api/auth/login', successRedirect: '/' },
//   // ),
//   (req, res) => {
//     console.log('auth successfully');
//     console.log(req.url, 'request url');
//     res.redirect('/');
//   });

export default router;
