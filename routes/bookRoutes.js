const express = require('express')
const bookController = require('../controllers/bookController')

const router = express.Router()

router.post('/', bookController.add_book)

router.get('/', bookController.get_one_book)

router.delete('/', bookController.delete_book)

router.post('/:title', bookController.update_book)

module.exports = router
