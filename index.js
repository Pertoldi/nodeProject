const express = require('express')
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose');
const BlogPost = require('./models/blogPost');
const User = require('./models/user');

const app = express()
const port = 3000

mongoose.connect(`mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`, { useNewUrlParser: true })
	.then(() => console.log('Connexion à MongoDB réussie !'))
	.catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.static('public'));//pour avoir acces au ressources static: image etc...

// EJS
app.set('views', './views') //On indique que les views sont dans le dossier ./views
app.set('view engine', 'ejs') //On indique que notre moteur de vue est ejs

//Parser pour lire le corps des requetes post
app.use(express.json())
app.use(express.urlencoded({ useNewwUrlParser: true }))

app.get('/', async (req, res) => {
	const blogposts = await BlogPost.find({})
	res.render('index', { blogposts })
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

app.get('/post/:id', async (req, res) => {
	console.log('req.params.id is :', req.params.id)
	const blogpost = await BlogPost.findById(req.params.id)
	console.log('blogpost is :', blogpost)
	res.render('post', { blogpost })
})

app.post('/post/new', (req, res) => {

	const blog = new BlogPost({
		title: req.body.title,
		content: req.body.content,
		userName: req.body.userName
	})
	blog.save()

	res.redirect('/')
})

app.get('/user', (req,res) => {
	res.render('user')
})

app.post('/user/new', (req,res) => {
	const user = new User({
		userName: req.body.userName,
		password: req.body.password
	});
	user.save()
	res.redirect('/')
})

app.get('/**',  (req,res) => {
	res.redirect('/')
})


app.listen(port, () => {
	console.log(`Server Express listening on  http://localhost:${port}`);
})
