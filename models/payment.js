//importacion de los tipos de datos que ofrece sequelize
const {DataTypes} = require('sequelize');

//importamos conexion a la db
const sequelize = require("../config/database");

const User = require('./user');
const Invoice = require('./invoice');

//Modelo de pagos
const Payment = sequelize.define("Payment",{
      id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    invoice_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
        model: Invoice,
        key: 'id'
        }
    },
    payment_date:{
        type:DataTypes.DATEONLY,
        allowNull:false,
    },
    payment_method:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount:{
        type:DataTypes.FLOAT,
        allowNull:false
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

module.exports=Payment;