const express=require('express')
const path=require('path')


exports.getHome=(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','index.html'))

}

exports.postUser=(req,res)=>{
    console.log(req.body)
    res.redirect('/')
}