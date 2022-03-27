// Import the Sequelize constructor from the library
const Sequelize = require('sequelize');

//using npm package to mask mysql credentials
require('dotenv').config();

// Create connection to our database, pass in your MySQL information for username and password
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL); //Use JawsDB if we deploy to cloud (Heroku) 
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, { //use locally
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;