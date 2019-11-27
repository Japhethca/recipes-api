// eslint-disable-next-line max-classes-per-file
import models from '../models';

export default class RecipeManager {
  constructor() {
    this.model = models.recipe;
  }

  async getRecipeById(id) {
    const recipe = await this.model.findByPk(id);
    return recipe;
  }

  async createRecipe(recipe) {
    const newRecipe = await this.model.create({
      ...recipe,
    });
    return newRecipe;
  }

  static async updateWithModelObject(id, recipeModel, fields) {
    const updatedRecipe = await recipeModel.update(fields, { where: { id } });
    return updatedRecipe;
  }

  async deleteRecipe(id) {
    await this.model.destroy({ where: { id } });
  }

  async getAllRecipes(options) {
    const filteOptions = {
      limit: 10,
      offset: 0,
      ...options,
    };
    const recipes = await this.model.findAll({
      ...filteOptions,
    });
    return recipes;
  }
}
