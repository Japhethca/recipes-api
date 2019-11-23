
/**
 * @description schema for favorites model
 * @param {object} sequelize - sequelize instance
 * @param {object} DataTypes - Datatype instance
 * @returns {object} - Database Object
 */
export default (sequelize, DataTypes) => {
  const Favorites = sequelize.define('Favorites', {
    userId: {
      type: DataTypes.INTEGER,
    },
    recipeId: {
      type: DataTypes.INTEGER,
    },
  });
  Favorites.associate = (models) => {
    Favorites.belongsTo(models.Recipes, {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE',
    });
    Favorites.belongsTo(models.Users, {
      foreignKey: 'userId',
    });
  };
  return Favorites;
};
