const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const appRoute=require('./routes/app')

const app=express()

//middleware
app.use(cors())
app.use(bodyParser.json({extended:false}))

app.use(appRoute)


app.listen(4000,()=>{
    console.log('Working!')
})