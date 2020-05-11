'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employee', {
      Cod_Funcionario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
     Data_Admissao: {
       type: Sequelize.DATE,
       allowNull: false,
     },
     Cod_Setor: {
      type: Sequelize.INTEGER,
      references: { model: 'Sector', key: 'Cod_Setor'},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
   },
     
   });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Employee');
  }
};
