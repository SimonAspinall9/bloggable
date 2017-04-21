var mongoClient = require('mongodb').MongoClient

function findByUsername(username, callback) {
    mongoClient.connect('mongodb://localhost:27017/bloggable', (err, db) => {
        if (err) throw err

        console.log('username: ' + username)

        db.collection('users').findOne({ username: username }, callback)
    })
}

function findBySurname(surname) {
    mongoClient.connect('mongodb://localhost:27017/bloggable', (err, db) => {
        if (err) throw err

        db.collection('users').find({ details: { last: surname } }).toArray((err, results) => {
            if (err) throw err

            console.log(results)
        })
    })
}

module.exports = { findByUsername, findBySurname }