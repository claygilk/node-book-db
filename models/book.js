const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    authors: {
        type: [String]
    },
    description:  {
        type: String
    },
    pageCount:  {
        type: Number
    },
    imageLinks: {
        smallThumbnail: {
          type: String
        },
        thumbnail: {
          type: String
        }
      },
}, {timestamps: true})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book