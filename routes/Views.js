const express = require('express');
const router = express.Router();

//Home screen
router.get("",(req,res) => {
  res.render('login')
})


router.get('/register', (req, res) => {
  res.render('register')
})

router.get('/login', (req, res) => {
  res.render('login')
})
router.get('/timeline', (req, res) => {
  res.render('timeline')
})

router.get('/notification', (req, res) => {
  res.render('notification')
})

router.get('/search', (req, res) => {
  res.render('search')
})

router.get('/settings', (req, res) => {
  res.render('settings')
})


module.exports = router