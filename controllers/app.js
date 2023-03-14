const Users=require('../models/users')
const { randomUUID } = require('crypto');
exports.getHome=(req,res)=>{
    // res.sendFile(path.join(__dirname,'../','views','index.html'))
    res.send('Appointment Booking Backend Server!')

}

exports.postUser=async(req,res)=>{
    try{
        console.log(req.body)
        const username=req.body.name
        const email=req.body.email
        const phoneNumber=req.body.phoneNumber;
   
      const data= await Users.create({
           id:randomUUID(),
           username:req.body.name,
           email:req.body.email,
           phoneNumber:req.body.phoneNumber
       })
   
       console.log(data)
       res.status(201).json({userDetail:data})
    }catch(err){
        res.status(500).json({error:err})
    }


}


exports.getUsers=async(req,res)=>{
    try{
        const users=await Users.findAll()
        res.status(201).json({allUsers:users})
    }catch(err){
        console.log(err)
    }

}