const { response } = require('express')
const Book = require('../models/book')

const add_book = (req, res) => {
    
    console.log('Adding Book to DB')

    let formattedJSON = transformJSON(req.body)

    const newBook = new Book(formattedJSON)

    newBook.save()
        .then(() => {
            res.status(201).send()
        })
        .catch(error => {
            console.log(error)
            response.status(304).send()
        })
}

function transformJSON(rawJSON){

    let book = {}

    book.title = rawJSON.volumeInfo.title
    book.subtitle = rawJSON.volumeInfo.subtitle
    book.authors = rawJSON.volumeInfo.authors
    book.description = rawJSON.volumeInfo.description
    book.pageCount = rawJSON.volumeInfo.pageCount
    book.imageLinks = rawJSON.volumeInfo.imageLinks

    return book

}

module.exports = {
    add_book
}