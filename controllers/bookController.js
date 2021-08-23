const { response } = require('express')
const Book = require('../models/book')

// Add book to database
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

// Lookup book by title
const get_one_book = (req, res) => {
    
    const paramTitle = req.query.title

    Book.findOne({ title: paramTitle})
        .then(record => {
            res.json(record).status(200).send()
        })
        .catch(err => {

            console.log(err)
            res.status(404).send()
        })
}

const delete_book = (req, res) => {
    
    const paramTitle = req.query.title

    Book.findOneAndDelete({ title: paramTitle})
        .then(() => {

            Book.findOne({ title: paramTitle})
                .then(record => {

                    if(!record){

                        res.status(204).send()
                    }
                    res.status(304).send()

                })
                .catch(err => {
                    console.log(err)
                    res.status(404).send()
                })
        })
        .catch(err => {

            console.log(err)
            res.status(404).send()
        })
    
}

const update_book = (req, res) => {
    console.log('update book')
    
}

// Helper function
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
    add_book,
    get_one_book,
    delete_book,
    update_book
}