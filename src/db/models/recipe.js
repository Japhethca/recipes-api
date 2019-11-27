import { capitalize } from 'lodash';
/**
 * @description schema for recipes model
 * @param {object} sequelize - sequelize instance
 * @param {object} DataTypes - Datatype instance
 * @returns {object} - Database Object
 */
module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define('recipe', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      set(value) {
        this.setDataValue('name', capitalize(value));
      },
      get() {
        return capitalize(this.getDataValue('name'));
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        return capitalize(this.getDataValue('description'));
      },
    },
    ingredients: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
    direction: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  }, { freezeTableName: true });

  recipe.associate = (models) => {
    recipe.belongsTo(models.user, {
      foreignKey: 'userId',
      as: 'author',
    });
    recipe.hasMany(models.review, {
      foreignKey: 'recipeId',
    });
    recipe.hasMany(models.favorite, {
      foreignKey: 'recipeId',
      as: 'favorites',
    });
  };
  return recipe;
};
