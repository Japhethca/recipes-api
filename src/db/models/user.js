import { capitalize } from 'lodash';
import { hashPassword } from '../../utils/hash';

/**
 * schema for users model
 * @param {object} sequelize - sequelize instance
 * @param {object} DataTypes - Datatype instance
 * @returns {object} - Database Object
 */
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstname: {
      type: DataTypes.STRING,
      set(value) {
        this.setDataValue('firstname', capitalize(value));
      },
    },
    lastname: {
      type: DataTypes.STRING,
      set(value) {
        this.setDataValue('lastname', capitalize(value));
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        this.setDataValue('password', hashPassword(value));
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
      unique: true,
      set(value) {
        this.setDataValue('email', value.toLowerCase());
      },
    },
  },
  { freezeTableName: true });

  user.associate = (models) => {
    user.hasMany(models.recipe, {
      foreignKey: 'userId',
      as: 'recipe',
    });
    user.hasMany(models.review, {
      foreignKey: 'userId',
      as: 'reviews',
    });
    user.hasMany(models.favorite, {
      foreignKey: 'userId',
      as: 'favorites',
    });
    // user.hasMany(models.like, {
    //   foreignKey: 'userId',
    //   as: 'likes',
    // });
  };
  return user;
};
