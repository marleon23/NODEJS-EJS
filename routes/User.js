const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const db = require('../db')

router.post('/sign-up', async (req, res) => {
  try {
    const { email, user_name, password } = req.body;
    console.log(user_name);
    // Hash and salt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store the user in the database

    db.run('INSERT INTO users (email, user_name, hashed_password) VALUES (? ,?, ?)', [email, user_name, hashedPassword], function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
      res.send(req.body);
    });

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

})

router.post('/sign-in', async (req, res) => {
  let user_entered_password = req.body.password;
  let user_name = req.body.user_name;
  console.log(user_name);
  const query = "SELECT * FROM users WHERE user_name = ?"
  db.get(query,[user_name],(err,row) =>{
    const hashed_password = row.hashed_password; 
    bcrypt.compare(user_entered_password, hashed_password, (err, result) => {
      if (err) {
        // Handle error
        console.error(err);
      } else if (result) {
        // Passwords match, authentication successful
        console.log('Authentication successful');
      } else {
        // Passwords do not match, authentication failed
        console.log('Authentication failed');
      }
    }); 
  })
});

module.exports = router
