
/**
 * @description schema for favorites model
 * @param {object} sequelize - sequelize instance
 * @param {object} DataTypes - Datatype instance
 * @returns {object} - Database Object
 */
module.exports = (sequelize, DataTypes) => {
  const favorite = sequelize.define('favorite', {
    userId: {
      type: DataTypes.INTEGER,
    },
    recipeId: {
      type: DataTypes.INTEGER,
    },
  });
  favorite.associate = (models) => {
    favorite.belongsTo(models.recipe, {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE',
    });
    favorite.belongsTo(models.user, {
      foreignKey: 'userId',
    });
  };
  return favorite;
};
