const express =  require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bookRoutes = require('./routes/bookRoutes')

// Initialize express app, and configure settings
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan('dev'))

const connectionString = 'mongodb+srv://netninja:test1234@nodetutorial.mjviw.mongodb.net/node-bookshelf?retryWrites=true&w=majority'

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })

    .then(result => {
        console.log('Succesfully Connected to Database');

        app.listen(3000)
    })
    .catch(error => {
        console.log(error);
    })

app.use('/books', bookRoutes)
 