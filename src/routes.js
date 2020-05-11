const express = require('express');

const HospitalController = require('./controllers/HospitalController');
const SectorController = require('./controllers/SectorController');
const EmployeeController = require('./controllers/EmployeeController');
const RoomController = require('./controllers/RoomController');
const InsuranceController = require('./controllers/InsuranceController');
const EquipmentController = require('./controllers/EquipmentController');
const LocationController = require('./controllers/LocationController');
const DoctorController = require('./controllers/DoctorController');
const PatientController = require('./controllers/PatientController');
const ReservationController = require('./controllers/ReservationController');
const HospitalizationController = require('./controllers/HospitalizationController');


const routes = express.Router();

//Get All Hospitals
routes.get('/hospital', HospitalController.index);
//Post New Hospital
routes.post('/hospital', HospitalController.store);

//Get All Sectors
routes.get('/hospital/:Cod_Hospital/sector/', SectorController.index);
//Get New Sectors
routes.post('/hospital/:Cod_Hospital/sector/', SectorController.store);

//Get All Employees
routes.get('/employee', EmployeeController.index);
//Get Single Employee
routes.get('/employee/:Cod_Funcionario', EmployeeController.findemployee);
//Post New Employee
routes.post('/employee', EmployeeController.store);

//Get All Rooms
routes.get('/room', RoomController.index);
//Get All Rooms from a Sector
routes.get('/room/sector/:Cod_Setor/', RoomController.findbysector);
//Post new Room
routes.post('/room', RoomController.store);

//Get All Insurances
routes.get('/insurance', InsuranceController.index);
//Post New Insurance
routes.post('/insurance', InsuranceController.store);

//Get All Equipments
routes.get('/equipment', EquipmentController.index);
//Post New Equipment
routes.post('/equipment', EquipmentController.store);

//Get Locations
routes.get('/location', LocationController.index);
//Post New Location
routes.post('/location', LocationController.store);

//Get All Doctors
routes.get('/doctor', DoctorController.index);
//Post New Doctor
routes.post('/employee/:Cod_Funcionario/doctor', DoctorController.store);

//Get Patients
routes.get('/patient', PatientController.index);
//Get Patient by id
routes.get('/patient/:Cod_Paciente/', PatientController.findpatient);
//Post New Patient
routes.post('/patient', PatientController.store);

//Get All Reservation
routes.get('/reservation', ReservationController.index);
//Post New Reservation
routes.post('/reservation', ReservationController.store);

//Get All Reservation
routes.get('/hospitalization', HospitalizationController.index);
//Post New Reservation
routes.post('/hospitalization', HospitalizationController.store);














//routes.get('/users/:user_id/techs', TechController.index);
//routes.post('/users/:user_id/techs', TechController.store);
//routes.delete('/users/:user_id/techs', TechController.delete);

//routes.get('/report', ReportController.show);

module.exports = routes;