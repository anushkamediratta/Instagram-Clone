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

router.put("/comment", requireLogin, async (req, res) => {
    try {
      const comment = {
        text: req.body.text,
        postedBy: req.user._id
      };
      const result = await Post.findByIdAndUpdate(
        req.body.postId,
        {
          $push: { comments: comment }
        },
        {
          new: true
        }
      )
        .populate("comments.postedBy", "_id email")
        .populate("postedBy", "_id name")
        .exec();
  
      return res.json(result);
    } catch (error) {
      return res.status(422).json({ error });
    }
});

router.delete("/deletePost/:postId", requireLogin, async (req, res) => {
    try {
      const post = await Post.findOne({ _id: req.params.postId })
        .populate("postedBy", "_id name")
        .exec();
  
      if (!post) {
        return res.status(422).json({ error: "Post not found" });
      }
  
      if (post.postedBy._id.toString() === req.user._id.toString()) {
        const result = await post.deleteOne();
        return res.json({ result });
      } else {
        return res.status(401).json({ error: "Unauthorized" });
      }
    } catch (error) {
      return res.status(422).json({ error });
    }
  });

module.exports= router
