const assert = require('assert')
const Book = require('../models/book')

describe('Reading from database', () => {

    let testBook

    beforeEach(done => {

        testBook = new Book ({
            title: 'Preserving Flowers',
            subtitle: 'Dried & Pressed Floral Designs for Every Season',
            authors: [ 'Diane Flowers' ],
            description: 'Learn how easy pressing and preserving flowers can be and then create spectacular, one-of-a-king arrangements. More than 40 original designs for gorgeous wreaths, centerpieces, picture frames, and more, all featuring plants that you have dried, will showcase your talent and brighten your home.--COVER.',    
            pageCount: 128,
            imageLinks: {
              smallThumbnail: 'http://books.google.com/books/content?id=YgK6iJyu-ZEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
              thumbnail: 'http://books.google.com/books/content?id=YgK6iJyu-ZEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
            }
        })

        testBook.save().then(() => { done() })
    })
 
    it('Lookup book by title', done => {

        Book.findOne({title: 'Preserving Flowers'})
            .then(result => {

                assert(result.title === testBook.title)
                done()
            })
    })

    afterEach(() => {

        Book.findOneAndRemove({title:'Preserving Flowers'})
    })
})