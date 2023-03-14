const Sequelize=require('sequelize')

const sequelize=require('../utils/db')

const Users=sequelize.define('users',{
    id:{
        type:Sequelize.STRING,
        allowNull:false,
        primaryKey:true
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    phoneNumber:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports=Users;