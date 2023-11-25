// const express = require('express')
const express = require('express')
const articleRouter = require('./routes/articles.js')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    res.render('index', {text: 'Hello'})
})

app.listen(5500)