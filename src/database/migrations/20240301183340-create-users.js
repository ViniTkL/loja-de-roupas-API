/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      age: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.DataTypes.STRING,
        allowNull:false,
      },
      cpf:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      cep:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      house_number:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      password_hash: {
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

  async down (queryInterface) {
    await queryInterface.dropTable('users');
  }
};
