// imports
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

//Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

//Set Viees
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/login',(req, res) => {
    res.render('login')

})
app.get('/register',(req, res) => {
    res.render('register')

})
//Listen on port 3000
app.listen(PORT, () => {
    console.log(`The Server is running on PORT: ${PORT}`)
})