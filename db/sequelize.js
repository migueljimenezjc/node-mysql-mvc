const Sequelize = require('sequelize')
const UserModel = require('../models/user')

const sequelize = new Sequelize({
    database: 'test_sequelize',
    username: 'root',
    password: 'YourRootPassword',
    dialect: 'mysql',
  });

const User = UserModel(sequelize, Sequelize)

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  User
}