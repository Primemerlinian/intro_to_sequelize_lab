'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sauces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      meal: {
        type: Sequelize.ENUM("Guac", "Red", "Green"),
        defaultValue: 'Guac'
      },
      tacoId: {
        type: Sequelize.INTEGER,
				allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Tacos',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sauces');
  }
};