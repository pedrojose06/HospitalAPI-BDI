'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Doctor', {
      CRM: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      Especialidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
     Cod_Funcionario: {
       type: Sequelize.INTEGER,
       references: { model: 'Employee', key: 'Cod_Funcionario'},
       onUpdate: 'CASCADE',
       onDelete: 'CASCADE',
       allowNull: false,
     },
   });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Doctor');
  }
};
