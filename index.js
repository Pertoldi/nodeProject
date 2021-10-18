const express = require('express')
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose');
const BlogPost = require('./models/blogPost');

const app = express()
const port = 3000

mongoose.connect(`mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`, { useNewUrlParser: true })
	.then(() => console.log('Connexion à MongoDB réussie !'))
	.catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.static('public'));//pour avoir acces au ressources static: image etc...

// EJS
app.set('views', './views') //On indique que les views sont dans le dossier ./views
app.set('view engine', 'ejs') //On indique que notre moteur de vue est ejs

//PARser pour lire le corps des requetes post
app.use(express.json())
app.use(express.urlencoded({ extend: true }))

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

app.get('/post/new', (req, res) => {
	res.render('newPost')
})

app.post('/post/new', (req, res) => {
	console.log(req.body);

	const blog = new BlogPost({
		title: req.body.title,
		body: req.body.body
	})
	blog.save()

	res.redirect('/')
})



app.listen(port, () => {
	console.log(`Server Express listen on port ${port}`);
})
