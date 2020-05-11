'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reservation', {
      Cod_Reserva: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
     Cod_Paciente: {
       type: Sequelize.INTEGER,
       references: { model: 'Patient', key: 'Cod_Paciente'},
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
   });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reservation');
  }
};
