const express=require('express')
const usersController=require('../controllers/users')

const router=express.Router()

router.get('/user/get-users',usersController.getUsers)

router.post('/user/add-user',usersController.postUser)

router.delete('/delete-user/:id',usersController.deleteUser)

router.get('/edit-user/:id')



module.exports=router;