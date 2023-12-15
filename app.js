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

//Set Viees
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/login', (req, res) => {
  res.render('login')

})


app.post('/auth',(req,res)=>{
  res.send(req.body)
})

app.get('/test', (req, res) => {
  db.all('SELECT * FROM post_mock', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
      return;
    }
    // Process the results
    res.send(rows);
  });
});

app.get('/register', (req, res) => {
  res.render('register')

})
app.get('/', (req, res) => {
  res.render('homepage')

})

//Listen on port 3000
app.listen(PORT, () => {
  console.log(`The Server is running on PORT: ${PORT}`)
})