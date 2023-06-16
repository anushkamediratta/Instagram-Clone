const express=require('express')
const requireLogin = require('../middleware/requireLogin')
const User = require('../models/user')
const router=express.Router()

router.get("/user/:id",requireLogin,(req,res)=>{
    User

})

module.exports=router