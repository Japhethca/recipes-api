import _ from 'lodash';
/**
 * @description schema for reviews model
 * @param {object} sequelize - sequelize instance
 * @param {object} DataTypes - Datatype instance
 * @returns {object} - Database Object
 */
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        return _.capitalize(this.getDataValue('content'));
      },
      set(value) {
        this.setDataValue('content', _.capitalize(value));
      },
    },
    recipeId: {
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
    },

  });
  review.associate = (models) => {
    review.belongsTo(models.recipe, {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE',
    });
    review.belongsTo(models.user, {
      foreignKey: 'userId',
    });
  };
  return review;
};
