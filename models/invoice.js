//importacion de los tipos de datos que ofrece sequelize
const {DataTypes} = require('sequelize');

//importamos conexion a la db
const sequelize = require("../config/database")

const User=require('./user');
const Budget= require('./budget')

//Modelo de factura
const Invoice = sequelize.define("Invoice",{
      id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    budget_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
        model: Budget,
        key: 'id'
        }
    },
    issue_date:{
        type:DataTypes.DATEONLY,
        allowNull:false,
    },
    payment_status:{
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

module.exports=Invoice;