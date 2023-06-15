const express=require('express')
const router=express.Router()
const requireLogin=require('../middleware/requireLogin')
const Post=require('../models/post')

router.post("/createPost",requireLogin,(req,res)=>{
    const{title,body,pic}=req.body
    if(!title || !body || !pic){
        return res.status(422).json({error:"Please add all the fields"})
    }else{
        const post=new Post({title,body,photo:pic,postedBy:req.user})
        post.save()
            .then(result => res.json(result))

    }
})

module.exports= router