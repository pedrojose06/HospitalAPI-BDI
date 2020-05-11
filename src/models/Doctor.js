const { Model, DataTypes } = require('sequelize');

class Doctor extends Model {
  static init(sequelize) {
    super.init({
      CRM: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      Especialidade: DataTypes.STRING,
      Cod_Funcionario: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
  //  this.belongsTo(models.Employee, { foreignKey: 'Cod_Funcionario', targetKey: 'Cod_Funcionario', as: 'Medico' });
  }
}

module.exports = Doctor;