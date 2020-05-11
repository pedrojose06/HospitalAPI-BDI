const { Model, DataTypes } = require('sequelize');

class Hospital extends Model {
  static init(sequelize) {
    super.init({
      Cod_Hospital: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      Nome: DataTypes.STRING,
      Endereco: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Sector, { foreignKey: 'Cod_Hospital', targetKey:'Cod_Hospital', as: 'Setores'});
  } 
}

module.exports = Hospital;