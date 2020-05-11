const { Model, DataTypes } = require('sequelize');
const Room = require('../models/Room');

class Reservation extends Model {
  static init(sequelize) {
    super.init({
      Cod_Reserva: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      Cod_Paciente: DataTypes.INTEGER,
      Cod_Quarto: DataTypes.INTEGER,
    }, {
      sequelize
    })
    Reservation.afterCreate("Registra quarto em uso", async reserva => {
      console.log("Teste Create");
      //const quarto = await Room.findByPk(reserva.Cod_Quarto);
      //console.log("Cod Quarto", quarto);
      //Room.update();
      //await Room.update(
      //  Em_Uso = true,
      //)
    });
    Reservation.afterDestroy("Registra quarto vazio", async reserva => {
      console.log("Teste Destroy");
      //await Room.update(
      // Em_Uso = false,
      //)
    });
  }



  static associate(models) {
  //  this.belongsTo(models.Room, { foreignKey: 'Cod_Quarto', targetKey: 'Cod_Quarto', as: 'ReservaQuarto' });
  //  this.belongsTo(models.Patient, { foreignKey: 'Cod_Paciente', targetKey: 'Cod_Paciente', as: 'ConvenioReserva' });  
  }
}

module.exports = Reservation;