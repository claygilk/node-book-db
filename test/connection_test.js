const mongoose = require('mongoose')

before(done => {

    const connectionString = 'mongodb+srv://netninja:test1234@nodetutorial.mjviw.mongodb.net/node-bookshelf?retryWrites=true&w=majority'

    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    
    mongoose.connection.once('open', () => {
        console.log('Connected to database...')
        done()
    })
    .on('error', err => {
        console.log(err)
    })
})