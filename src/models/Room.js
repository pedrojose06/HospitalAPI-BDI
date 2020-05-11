const { Model, DataTypes } = require('sequelize');

class Room extends Model {
  static init(sequelize) {
    super.init({
      Cod_Quarto: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      Nome_Quarto: DataTypes.STRING,
      Cod_Setor: DataTypes.INTEGER,
      Em_Uso: { type: DataTypes.BOOLEAN, defaultValue: false },
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasOne(models.Reservation, { foreignKey: 'Cod_Quarto', targetKey: 'Cod_Quarto', as: 'ReservaQuarto' });
    this.belongsTo(models.Sector, { foreignKey: 'Cod_Setor', targetKey: 'Cod_Setor', as: 'SetorQuarto' });
    //this.belongsTo(models.Location, { uniqueKey: 'Cod_Localizacao'});
  }
}

module.exports = Room; 