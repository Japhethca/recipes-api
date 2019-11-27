import express from 'express';
import passport from 'passport';

import authenticator, {
// handleUnimplementedMethods
} from './middlewares/authenticate';
import { login, signup } from './controllers/auth';
import {
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getAllRecipes,
  getRecipe,
} from './controllers/recipe';
import {
  loginValidator,
  signupValidagor,
  createRecipeValidator,
  updateRecipeValidator,
  deleteRecipeValidator,
  getRecipeValidator,
} from './validationSchemas';

const router = express.Router();

router.use(authenticator);
// router.use(handleUnimplementedMethods(router));
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

router.post('/recipes', createRecipeValidator, createRecipe);
router.get('/recipes', getAllRecipes);
router.get('/recipes/:id', getRecipeValidator, getRecipe);
router.put('/recipes/:id', updateRecipeValidator, updateRecipe);
router.delete('/recipes/:id', deleteRecipeValidator, deleteRecipe);

export default router;
