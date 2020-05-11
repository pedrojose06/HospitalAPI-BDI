const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Hospital = require('../models/Hospital');
const Sector = require('../models/Sector');
const Employee = require('../models/Employee');
const Room = require('../models/Room');
const Insurance = require('../models/Insurance');
const Reservation = require('../models/Reservation');
const Equip = require('../models/Equip');
const Location = require('../models/Location');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');
const Hospitalization = require('../models/Hospitalization');

const connection = new Sequelize(dbConfig);

Hospital.init(connection);
Sector.init(connection);
Employee.init(connection);
Room.init(connection);
Insurance.init(connection);
Equip.init(connection);
Location.init(connection);
Doctor.init(connection);
Patient.init(connection);
Reservation.init(connection);
Hospitalization.init(connection);

Hospital.associate(connection.models);
Sector.associate(connection.models);
Employee.associate(connection.models);
Room.associate(connection.models);
Insurance.associate(connection);
Equip.associate(connection);
Location.associate(connection);
Doctor.associate(connection);
Patient.associate(connection);
Reservation.associate(connection);
Hospitalization.associate(connection);
module.exports = connection;