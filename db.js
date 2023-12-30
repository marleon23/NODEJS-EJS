const fs = require('fs')
const sqlite3 = require('sqlite3');

//Populate database
// Use SQLite in-memory database for demonstration purposes.
const db = new sqlite3.Database(':memory:');

// Read and execute the SQL file
const sqlFilePath = 'post.sql';
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

module.exports = db;