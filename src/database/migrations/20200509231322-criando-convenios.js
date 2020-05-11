'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Insurance', {
      Cod_Convenio: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Nome_Convenio: {
        type: Sequelize.STRING,
        allowNull: false,
      },     
   });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Insurance');
  }
};
