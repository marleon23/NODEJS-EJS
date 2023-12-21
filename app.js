// imports
const express = require('express')
const app = express()
const sqlite3 = require('sqlite3');
const PORT = process.env.PORT || 3000
const fs = require('fs')

//Middlewares
// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

//Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

//Populate database
// Use SQLite in-memory database for demonstration purposes.
const db = new sqlite3.Database(':memory:');

// Read and execute the SQL file
const sqlFilePath = 'post_mock.sql';
const sql = fs.readFileSync(sqlFilePath, 'utf8');

db.serialize(() => {
  // Execute the SQL statements
  db.exec(sql, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Database populated successfully');
  });
});

//Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

//set routes
const userRoute = require('./routes/User');

//Home screen
app.get('/homepage', (req, res) => {
  res.render('homepage')
})

app.get('/register', (req, res) => {
  res.render('register')
})

app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/timeline', (req, res) => {
  res.render('timeline')
})

app.get('/notification', (req, res) => {
  res.render('notification')
})


app.get('/search', (req, res) => {
  res.render('search')
})
app.get('/settings', (req, res) => {
  res.render('settings')
})


//////////////////////////////////////////////
app.use("/auth",userRoute)

//Listen on port 3000
app.listen(PORT, () => {
  console.log(`The Server is running on PORT: ${PORT}`)
})

