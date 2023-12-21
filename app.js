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
const viewsRoute = require('./routes/Views')






//////////////////////////////////////////////
app.use("/auth",userRoute)
app.use("/",viewsRoute)

//Listen on port 3000
app.listen(PORT, () => {
  console.log(`The Server is running on PORT: ${PORT}`)
})

