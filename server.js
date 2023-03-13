const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')

const app=express()

//middleware
app.use(cors())
app.use(bodyParser.json({extended:false}))


app.get('/',(req,res)=>{
    res.send('Appointment Booking!')
})

app.listen(4000,()=>{
    console.log('Working!')
})