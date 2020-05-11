const { Model, DataTypes } = require('sequelize');

class Hospitalization extends Model {
  static init(sequelize) {
    super.init({
      Cod_Internacao: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      Cod_Paciente: DataTypes.INTEGER,
      Cod_Medico: DataTypes.INTEGER,
      Cod_Quarto: DataTypes.INTEGER,
      Data_Internacao: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      Data_Alta: DataTypes.DATE,
    }, {
      sequelize
    })
  }

  static associate(models) {
  //  this.belongsTo(models.Patient, { foreignKey: 'Cod_Paciente', targetKey: 'Cod_Paciente', as: 'HospitalizationPatient' });
  //  this.belongsTo(models.Doctor, { foreignKey: 'Cod_Medico', targetKey: 'CRM', as: 'HospitalizationDoctor' });
  //  this.belongsTo(models.Patient, { foreignKey: 'Cod_Quarto', targetKey: 'Cod_Quarto', as: 'HospitalizationRoom' });
  }
}

module.exports = Hospitalization;