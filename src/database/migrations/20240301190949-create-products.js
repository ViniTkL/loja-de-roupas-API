/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products',{
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      product_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false, 
      },
      price: {
        type: Sequelize.DataTypes.DECIMAL(7, 2),
        allowNull: false,
      },
      quantity_in_stock: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      size:{
        type: Sequelize.DataTypes.INTEGER,
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
      })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('products');
  }
};
