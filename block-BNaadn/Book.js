var mongoose = require('mongoose')
var schema = mongoose.schema
var bookSchema = new schema({
    title: {type:String, required:true},
    summary: String,
    pages: Number,
    cover_image: File,
    category: String,
    author: String,
}, {timestamps: true})

var Book = mongoose.model('Book', bookSchema)

module.exports = Book
