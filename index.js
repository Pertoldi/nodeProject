const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const port= 3000

app.use(express.static('public'));

app.get('/', (req,res) => {
	res.sendFile(path.resolve(__dirname, 'pages/index.html'));
})

app.get('/index.html', (req,res) => {
	res.sendFile(path.resolve(__dirname, 'pages/index.html'));
})

app.get('/about',(req,res) => {
	res.sendFile(path.resolve(__dirname, 'pages/about.html'));
})

app.get('/contact',(req,res) => {
	res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
})

app.get('/post',(req,res) => {
	res.sendFile(path.resolve(__dirname, 'pages/post.html'));
})

app.listen(port, () => {
	console.log(`Server Express listen on port ${port}`);
})
