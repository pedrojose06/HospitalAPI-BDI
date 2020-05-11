'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Location', {
      Cod_Localizacao: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
     Cod_Quarto: {
       type: Sequelize.INTEGER,
       references: { model: 'Room', key: 'Cod_Quarto'},
       onUpdate: 'CASCADE',
       onDelete: 'CASCADE',
       allowNull: false,
     },
     Cod_Equipamento: {
      type: Sequelize.INTEGER,
      references: { model: 'Equip', key: 'Cod_Equipamento'},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
   },
     
   });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Location');
  }
};
