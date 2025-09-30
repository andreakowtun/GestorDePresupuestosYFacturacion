//importacion de los tipos de datos que ofrece sequelize
const {DataTypes} = require('sequelize');

//importamos conexion a la db
const sequelize = require("../config/database")

const User=require('./user');

//Modelo del usuario (tabla usuario)
const Client = sequelize.define("Client",{
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
        unique:true,
        validate: {
            isEmail: true,
            len: [3, 100]
        }

    },
    telephone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:true
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
        model: User,
        key: 'id'
        }
    }

});

module.exports=Client;