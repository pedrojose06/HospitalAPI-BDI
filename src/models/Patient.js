const { Model, DataTypes } = require('sequelize');

class Patient extends Model {
  static init(sequelize) {
    super.init({
      Cod_Paciente: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      CPF: DataTypes.BIGINT(11),
      Nome: DataTypes.STRING,
      Cod_Convenio: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
  //  this.belongsTo(models.Insurance, { foreignKey: 'Cod_Convenio', targetKey: 'Cod_Convenio', as: 'Convenio' });
  }
}

module.exports = Patient;