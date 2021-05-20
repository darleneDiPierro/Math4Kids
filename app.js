const express = require('express')
const path = require('path')

const app = express();

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/quiz', (req, res) => {
    res.render('quiz')
})

app.get('/kabataku', (req, res) => {
    res.render('kabataku')
})

app.get('/bangundatar', (req, res) => {
    res.render('bangundatar')
})

app.get('/end', (req,res) => {
    res.render('end')
})

app.get('/kalkulator', (req, res) => {
    res.render('calculator')
})

app.get('/kabatakucalc', (req, res) => {
    res.render('kabatakucalc')
})

app.get('/bangundatarcalc', (req, res) => {
    res.render('bangundatarcalc')
})

app.get('/wtf', (req, res) => {
    res.render('wtf')
})

app.get('/highscores', (req, res) => {
    res.render('highscores')
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
})