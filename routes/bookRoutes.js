const express = require('express')
const bookController = require('../controllers/bookController')

const router = express.Router()

router.post('/', bookController.add_book)

module.exports = router
