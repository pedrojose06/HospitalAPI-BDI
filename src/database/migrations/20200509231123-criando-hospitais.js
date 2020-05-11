'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Hospital', {
         Cod_Hospital: {
           type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false,
         },
         Nome: {
           type: Sequelize.STRING,
           allowNull: false,
         },
         Endereco: {
           type: Sequelize.STRING,
           allowNull: false,
        },
        
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Hospital');
}
};
