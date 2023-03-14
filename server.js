const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const appRoutes=require('./routes/app')
const sequelize=require('./utils/db')
const userRoutes=require('./routes/users')
const app=express()

//middleware
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


app.use(appRoutes)
app.use(userRoutes)

sequelize.sync().then((res)=>{
    app.listen(4000);

}).catch(err=>console.log(err))
