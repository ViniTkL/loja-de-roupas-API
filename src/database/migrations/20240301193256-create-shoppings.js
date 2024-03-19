'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('shopping', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      cpf: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'users',
          key: 'cpf',
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        allowNull: false,
      },
      total_itens: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      total_value: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      from_of_payment: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('shopping');
  }
};
