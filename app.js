// imports
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

//Middlewares
// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

//Static files
app.use(express.static('public'))

//Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

//set routes
const userRoute = require('./routes/User');
const viewsRoute = require('./routes/Views')
const postRoute = require('./routes/Post');
const addComment = require('./routes/Comment');

//Routers
app.use("/auth",userRoute)
app.use("/",viewsRoute)
app.use("/",postRoute)
app.use("/",addComment)

app.use((req,res) =>{
  res.status(404).render('404')
})

//Listen on port 3000
app.listen(PORT, () => {
  console.log(`The Server is running on PORT: ${PORT}`)
})

