const express=require('express')
const appController=require('../controllers/app')

const router=express.Router()


router.get('/',appController.getHome)


module.exports=router;