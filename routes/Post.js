const express = require('express');
const router = express.Router();
const db = require('../db');
const user = require('./currentUser');
const comments = require('./Comments')

router.post('/create_post', (req, res) => {
    const postText  = req.body.postText;
    const query = "INSERT INTO post_mock (user_name, contents, number_of_likes) VALUES (?,?,?)"
    //use db.run to execute INSERT query
    db.run(query,[user.getUserName(),postText,0],(err) =>{
        if(err){
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }else{
            getPosts().then((posts) =>{
                res.render('homepage',{posts:posts,error:"",comments:comments.getComments()})
              })
        }
    })
});

router.post('/search', (req, res) => {
    const searchQuery = req.body.query;
    //getPost and find post that contains searchQuery
    getPosts().then((posts) =>{
        const filteredPosts = posts.filter((post) =>{
            return post.contents.includes(searchQuery)
        })
        res.render('homepage',{posts:filteredPosts,error:"",comments:comments.getComments()})
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
module.exports = router