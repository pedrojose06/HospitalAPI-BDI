const { Model, DataTypes } = require('sequelize');

class Employee extends Model {
  static init(sequelize) {
    super.init({
      Cod_Funcionario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      Nome: DataTypes.STRING,
      Data_Admissao: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      Cod_Setor: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Sector, { foreignKey: 'Cod_Setor', targetKey: 'Cod_Setor', as: 'SetorFuncionario' });
    this.hasOne(models.Doctor, { foreignKey: 'Cod_Funcionario', targetKey: 'Cod_Funcionario', as: 'Medico' });
  }
}

module.exports = Employee;