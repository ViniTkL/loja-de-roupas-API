'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('shopping_products', {
    shop_id: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'shopping',
        key: 'id',
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: false,
    },
    product_id: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: {
        model:  'products',
        key: 'id',
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: false,
    },
    quantidadeProdutos: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt:{
      type: Sequelize.DataTypes.DATE,
      allowNull: false
    },
    updatedAt:{
      type: Sequelize.DataTypes.DATE,
      allowNull: false
    },
   })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('shopping_products');
  }
};
