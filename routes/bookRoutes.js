const express = require('express')
const bookController = require('../controllers/bookController')

const router = express.Router()

router.post('/', bookController.add_book)

router.get('/', bookController.get_one_book)

router.get('/all', bookController.get_all_books)

router.delete('/', bookController.delete_book)

router.put('/:title', bookController.update_book)

module.exports = router
