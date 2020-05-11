const { Model, DataTypes } = require('sequelize');

class Insurance extends Model {
  static init(sequelize) {
    super.init({
      Cod_Convenio: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      Nome_Convenio: DataTypes.STRING,
    }, {
      sequelize
    })
  }

   static associate(models) {
  //  this.hasMany(models.Patient, { foreignKey: 'Cod_Convenio', as: 'Convenio' });
  //  this.hasMany(models.Reservation, { foreignKey: 'Cod_Convenio', as: 'ConvenioReserva' });
   }

}

module.exports = Insurance;