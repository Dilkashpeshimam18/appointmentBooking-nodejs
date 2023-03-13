const express=require('express')
const path=require('path')
const homeController=require('../controllers/app')

const router=express.Router()


router.get('/',homeController.getHome)

router.post('/user/add-user',homeController.postUser)

module.exports=router;