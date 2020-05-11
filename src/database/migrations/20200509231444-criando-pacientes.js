'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Patient', {
      Cod_Paciente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      CPF: {
        type: Sequelize.BIGINT(11),
        allowNull: false,
        unique: true,
      },
     Nome: {
       type: Sequelize.STRING,
       allowNull: false,
     },
     Cod_Convenio: {
      type: Sequelize.INTEGER,
      references: { model: 'Insurance', key: 'Cod_Convenio'},
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
   });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Patient');
  }
};
