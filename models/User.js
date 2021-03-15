const {Sequelize, DataTypes} = require("sequelize");
require("dotenv").config();

// Connected db


const { DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_NAME } = process.env;
const sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`);

sequelize
  .authenticate()
  .then( ()=> console.log("Succesfully connected to database"))
  .catch( err => console.log("Unable to connect database", err));
  

  const UserModel = sequelize.define(
      "user", 
      {
      firstName: {
          type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },

  })

  module.exports = UserModel;