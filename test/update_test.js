const assert = require('assert')
const Book = require('../models/book')

describe('Adding to database', () => {
    
    let testBook = new Book ({
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

    it('Add new book', done => {
        
        testBook.save()
            .then(() => {
                
                assert(!testBook.isNew)
                done()
            })
    })

    afterEach(() => {

        Book.findOneAndRemove({title:'Preserving Flowers'})
    })
})