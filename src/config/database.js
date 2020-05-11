module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'password',
  database: 'HospitalDB',
  define: {
    timestamps: false,
    freezeTableName: true,
  },
};
