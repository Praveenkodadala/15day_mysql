'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },

      category :{
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      commentId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Comment',
          key: 'id',
          as: 'commentId',
        },
      },

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tags');
  }
};