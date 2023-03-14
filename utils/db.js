const Sequelize=require('sequelize')

const sequelize=new Sequelize('users','root','dilkashsql786',
    {
      host:'localhost',
      dialect:'mysql'
    }
)

module.exports=sequelize;