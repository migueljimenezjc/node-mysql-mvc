const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    database: 'test_sequelize',
    username: 'root',
    password: 'YourRootPassword',
    dialect: 'mysql',
  });

  sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));


  module.exports = sequelize;