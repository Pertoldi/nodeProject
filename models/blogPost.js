const mongoose = require('mongoose')

const blogPostShema = mongoose.Schema({
	title: {type: String, require: true},
	body: {type: String, require: true},
})

module.exports = mongoose.model('blogPost', blogPostShema)

// On peut aussi faire:
// BlocPost = mongoose.model('blogPost', blogPostShema)
// module.exports = BlocPost
