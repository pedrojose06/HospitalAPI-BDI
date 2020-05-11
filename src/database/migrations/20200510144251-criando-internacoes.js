'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Hospitalization', {
      Cod_Internacao: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Cod_Paciente: {
        type: Sequelize.INTEGER,
        references: { model: 'Patient', key: 'Cod_Paciente'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
        allowNull: false,
      },
      Cod_Medico: {
        type: Sequelize.INTEGER,
        references: { model: 'Doctor', key: 'CRM'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      Cod_Quarto: {
        type: Sequelize.INTEGER,
        references: { model: 'Room', key: 'Cod_Quarto'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      Data_Internacao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Data_Alta: {
        type: Sequelize.DATE,
        allowNull: true,
      },
   });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Hospitalization');
  }
};
