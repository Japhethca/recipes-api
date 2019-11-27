module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('recipe', {
    id: {
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    description: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
    ingredients: {
      allowNull: false,
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    direction: {
      allowNull: true,
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        as: 'userId',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('recipe'),
};
