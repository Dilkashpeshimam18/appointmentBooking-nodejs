const Users=require('../models/users')
const { randomUUID } = require('crypto');


exports.postUser=async(req,res)=>{
    try{
        console.log(req.body)
   
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

exports.deleteUser=async(req,res)=>{
    try{
        if(!req.params.id || req.params.id=='undefined'){
            return res.status(400).json({err:'ID is missing'})
        }
        const userId=req.params.id
       await Users.destroy({where:{id:userId}})

        res.status(200).json({data:'User deleted'})
  

    }catch(err){
        res.status(500).json(err)
    }
}

exports.getEditUser=async(req,res)=>{
    try{
        const id=req.params.id
        const data= await Users.findByPk(id)

        res.status(200).json({data:data})

    }catch(err){
        console.log(err)
    }
}

exports.postEditUser=async(req,res)=>{
    try{
        const id=req.params.id
       console.log(id)
    //    console.log(req.body)

      const data=await Users.findByPk(id)
      data.username=req.body.username
      data.email=req.body.email
      data.phoneNumber=req.body.phoneNumber

      data.save()
      res.status(200).json({data})
     
    }catch(err){
        console.log(err)
    }
}
