'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Equip', {
      Cod_Equipamento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Nome_Equipamento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
     
   });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Equip');
  }
};
