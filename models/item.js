//importacion de los tipos de datos que ofrece sequelize
const {DataTypes} = require('sequelize');

//importamos conexion a la db
const sequelize = require("../config/database")

const Budget= require('./budget')

//Modelo de items
const Item = sequelize.define("Item",{
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
    description:{
        type:DataTypes.STRING,
        validate: {
            isEmail: true,
            len: [3, 100]
        }
    },
    amount:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    unit_price:{
        type:DataTypes.FLOAT,
        allowNull:false,
    }

});

module.exports=Item;