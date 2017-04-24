var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'VISION2001',
    database: 'nodejs'
})

function query(query, params, callback) {
    connection.query(query, params, (err, results) => {
        if (err) throw err
        callback(results)
    })
}

module.exports = query