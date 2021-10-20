const mongoose = require('mongoose')

const blogPostShema = mongoose.Schema({
	title: { type: String, require: true },
	content: { type: String, require: true },
	date: { type: Date , default: new Date()},
	userName: { type: String }
})

module.exports = mongoose.model('blogPost', blogPostShema)

// On peut aussi faire:
// BlocPost = mongoose.model('blogPost', blogPostShema)
// module.exports = BlocPost
