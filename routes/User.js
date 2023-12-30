const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const User = require('./currentUser');
const comments = require('./Comments')

const db = require('../db')

let logged_in_user_uuid = null;

router.post('/sign-up', async (req, res) => {
  try {

    const { email, user_name, password } = req.body;

    //Handle empty fields
    if (!email || !user_name || !password) {
      res.render('signup',{error:"Please fill all fields"})
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user_uuid = uuid.v4();

    // Store the user in the database
    db.run('INSERT INTO users (user_uuid,email, user_name, hashed_password) VALUES (?,? ,?, ?)', [user_uuid,email, user_name, hashedPassword], function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
      //render login page after successful signup
      res.render('login',{message:"User created successfully",error:""})
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})

router.post('/sign-in', async (req, res) => {
  let user_entered_password = req.body.password;
  let user_name = req.body.user_name;
  const query = "SELECT * FROM users WHERE user_name = ?"
  db.get(query,[user_name],(err,row) =>{
    //handle error so app wil not crash
    if(err || !row){
      res.render('login',{error:"User not found"})
    }else{
      const {hashed_password,user_name} = row; 
      bcrypt.compare(user_entered_password, hashed_password, (err, result) => {
        if (err) {
          console.error(err);
        } else if (result) {
          User.setUserName(user_name);
          getPosts().then((posts) =>{
            res.render('homepage',{posts:posts,error:"",comments:comments.getComments()})
          })
          console.log('Authentication successful');
        } else {
          res.render('login',{error:"Password is incorrect or user not found"})
          console.log('Authentication failed');
        }
      }); 
    }
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
