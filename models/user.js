//importacion de los tipos de datos que ofrece sequelize
const {DataTypes} = require('sequelize');

//importamos conexion a la db
const sequelize = require("../config/database")

//Modelo del usuario (tabla usuario)
const User = sequelize.define("User",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports=User;
