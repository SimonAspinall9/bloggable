var mongoClient = require('mongodb').MongoClient

mongoClient.connect('mongodb://localhost:27017/bloggable', (err, db) => {
    if (err) throw err

    db.collection('users').find({ username: 'simonaspinall_9' }).toArray((err, result) => {
        if (err) throw err

        console.log(result)
    })
})