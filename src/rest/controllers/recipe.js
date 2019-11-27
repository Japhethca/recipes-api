import { successResponse, serverError, errorResponse } from '../helpers';
import RecipeManager from '../../db/managers/Recipe';

const recipeManager = new RecipeManager();

export async function createRecipe(req, res) {
  try {
    const recipe = await recipeManager.createRecipe(req.body);
    successResponse(res, 201, recipe);
  } catch (error) {
    serverError(res, error);
  }
}

export async function updateRecipe(req, res) {
  try {
    const recipeId = req.params.id;
    const recipeObj = await recipeManager.getRecipeById(recipeId);
    if (!recipeObj) {
      errorResponse(res, 404, `Recipes with id '${recipeId}' does not exist.`);
      return;
    }
    const updatedRecipe = await RecipeManager.updateWithModelObject(recipeId, recipeObj, req.body);
    successResponse(res, 200, updatedRecipe);
  } catch (error) {
    serverError(res, error);
  }
}

export async function deleteRecipe(req, res) {
  try {
    const recipeId = req.params.id;
    const recipe = await recipeManager.getRecipeById(recipeId);
    if (!recipe) {
      errorResponse(res, 404, `Recipes with id '${recipeId}' does not exist.`);
      return;
    }
    await recipeManager.deleteRecipe(recipeId);
    successResponse(res, 204);
  } catch (error) {
    serverError(res, error);
  }
}

export async function getRecipe(req, res) {
  try {
    const recipeId = req.params.id;
    const recipe = await recipeManager.getRecipeById(recipeId);
    if (!recipe) {
      errorResponse(res, 404, `Recipes with id '${recipeId}' does not exist.`);
      return;
    }
    successResponse(res, 200, recipe);
  } catch (error) {
    serverError(res, error);
  }
}

export async function getAllRecipes(req, res) {
  try {
    const recipes = await recipeManager.getAllRecipes();
    successResponse(res, 200, recipes);
  } catch (error) {
    serverError(res, error);
  }
}
