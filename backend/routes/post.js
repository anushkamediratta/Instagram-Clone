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

router.get("/allPost",requireLogin,(req,res)=>{
    Post.find()
        .populate("postedBy","_id name")
        .then(posts => res.json(posts))
})

router.get("/myPost",requireLogin,(req,res)=>{
    Post.find({postedBy:req.user._id})
        .populate("postedBy","_id name")
        .then(myPost =>{
            res.json(myPost)
        })
})

router.put("/like",requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user._id}
    },{
        new:true
    })
    .then(result => res.json(result))
})

router.put("/unlike",requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user._id}
    },{
        new:true
    })
    .populate("postedBy","name")
    .then(result => res.json(result))
})
module.exports= router