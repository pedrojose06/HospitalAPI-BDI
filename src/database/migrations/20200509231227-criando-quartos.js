'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Room', {
      Cod_Quarto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Nome_Quarto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
     Cod_Setor: {
      type: Sequelize.INTEGER,
      references: { model: 'Sector', key: 'Cod_Setor'},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
      },
     Em_Uso:{
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
     },
   });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Room');
  }
};
