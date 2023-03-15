const express=require('express')
const appController=require('../controllers/app')

const router=express.Router()

router.get('/user/get-users',appController.getUsers)

router.post('/user/add-user',appController.postUser)

router.delete('/delete-user/:id',appController.deleteUser)



module.exports=router;