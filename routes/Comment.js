const express = require('express');
const router = express.Router();
const db = require('../db');
const comments = require('./Comments')
const currentUser = require('./currentUser')


router.post('/create_comment', (req, res) => {
    //Get the comment from the form
    const comment = req.body.comment;
    let post_id = req.body.post_id;
    post_id = parseInt(post_id);
    const user_name = currentUser.getUserName();
    //Create comment object
    const commentObj = {
        content: comment,
        post_id: post_id,
        user_name: user_name
    }
    comments.addComment(commentObj);
    //render the homepage with the comments
    getPosts().then((posts) =>{
        res.render('homepage',{posts:posts,error:"",comments:comments.getComments()})
    })
});

//function to get post from database
function getPosts(){
    return new Promise((resolve,reject) =>{
      const query = "SELECT * FROM post_mock"
      db.all(query,[],(err,rows) =>{
        if(err){
          reject(err)
        }
        resolve(rows)
      })
    })
  }

module.exports = router;