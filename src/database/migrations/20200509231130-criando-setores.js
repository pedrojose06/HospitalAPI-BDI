'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sector', {
      Cod_Setor: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Nome_Setor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Cod_Hospital: {
        type: Sequelize.INTEGER,
        references: { model: 'Hospital', key: 'Cod_Hospital'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false,
     },
     
   });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Sector');
  }
};
