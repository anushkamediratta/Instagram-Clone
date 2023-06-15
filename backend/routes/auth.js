const express=require('express')
const User=require('../models/user')
const bcrypt=require('bcrypt')
const user = require('../models/user')
const router=express.Router()

router.post("/signup",(req,res)=>{
    const {name,email,password,pic}=req.body
    if(!email || !name || !password){
        res.status(422).json({error:"Please Add all the Fields"})
    }else{
        User.findOne({email:email})
            .then((savedUser)=>{
                if(savedUser){
                    res.status(422).json({error:"User Already Exists"})
                }else{
                    bcrypt.hash(password,12)
                          .then(hashedPassword =>{
                            const user=new User({
                                name,
                                email,
                                password:hashedPassword,
                                pic
                            })
                            user.save()
                                .then(user =>{
                                    res.status(200).json({msg:"User Added Successfully"})
                                })
                          })
                }
            })

    }
})



module.exports=router