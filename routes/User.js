const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Middleware to handle the db instance
router.use((req, res, next) => {
  req.db = req.app.get('db');  // Access the db instance stored in the app
  next();
});

router.post('/sign-up', async (req, res) => {
  try {
    const { email, user_name, password } = req.body;

    // Hash and salt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store the user in the database

    req.db.run('INSERT INTO users (email, username, password) VALUES (? ,?, ?)', [email, user_name, hashedPassword], function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }

      res.status(201).send('User registered successfully!');
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

})


router.post('/sign-in', async (req, res) => {
});

module.exports = router
