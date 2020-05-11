const { Model, DataTypes } = require('sequelize');

class Sector extends Model {
  static init(sequelize) {
    super.init({
      Cod_Setor: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      Nome_Setor: DataTypes.STRING,
      Cod_Hospital: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Hospital, { foreignKey: 'Cod_Hospital', targetKey: 'Cod_Hospital', as: 'Hospital' });
    this.hasMany(models.Employee, { foreignKey: 'Cod_Setor', targetKey: 'Cod_Setor', as: 'SetorFuncionario' });
    this.hasMany(models.Room, { foreignKey: 'Cod_Setor', targetKey: 'Cod_Setor', as: 'SetorQuarto' });
  }
}

module.exports = Sector;