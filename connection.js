const Sequelize = require('sequelize');

const sequelize = new Sequelize('day8', 'root', 'password', {
    host: 'localhost',
    dialect:  'mysql'
  });

  sequelize.authenticate()
  
  .then(() => {
    console.log('Connected to db day8');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  module.exports = sequelize;