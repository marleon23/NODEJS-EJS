const express = require('express');
const router = express.Router();

//Home screen
router.get("",(req,res) => {
  res.render('login',{error:""})
})


router.get('/register', (req, res) => {
  res.render('register',{error:""})
})

router.get('/login', (req, res) => {
  res.render('login',{error:""})
})


module.exports = router