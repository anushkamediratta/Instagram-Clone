const express = require('express');
const requireLogin = require('../middleware/requireLogin');
const User = require('../models/user');
const Post = require('../models/post');
const router = express.Router();

router.get("/user/:id", requireLogin, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id }).select("-password");
    const posts = await Post.find({ postedBy: req.params.id })
      .populate("postedBy", "_id name")
      .exec();

    return res.status(200).json({ user, posts });
  } catch (err) {
    return res.status(422).json({ error: err });
  }
});

module.exports = router;