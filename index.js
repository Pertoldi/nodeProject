const express = require('express')
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')

const app = express()
const port = 3000

app.use(express.static('public'));//pour avoir acces au ressources static: image etc...

// EJS
app.set('views', './views') //On indique que les views sont dans le dossier ./views
app.set('view engine', 'ejs') //On indique que notre moteur de vue est ejs

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/about', (req, res) => {
	res.render('about')
})

app.get('/contact', (req, res) => {
	res.render('contact')
})

app.get('/post', (req, res) => {
	res.render('post')
})


app.listen(port, () => {
	console.log(`Server Express listen on port ${port}`);
})
