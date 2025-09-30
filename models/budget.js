//importacion de los tipos de datos que ofrece sequelize
const {DataTypes} = require('sequelize');

//importamos conexion a la db
const sequelize = require("../config/database")

const User=require('./user')
const Client = require('./client')

//Modelo presupuestos
const Budget = sequelize.define("Budget",{
      id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    client_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
        model: Client,
        key: 'id'
        }
    },
    date:{
        type:DataTypes.DATEONLY,
        allowNull:false,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pendiente'
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

module.exports=Budget;