var connection = require('./mysql-connection')

function getByUsername(username, callback) {
    connection.query('select Username, FirstName, LastName, EmailAddress from Users where Username = ?', [username], (err, results) => {
        callback(getResultsAsJSON(err, results)[0])
    })
}

function getByLastName(lastname, callback) {
    connection.query('select Username, FirstName, LastName, EmailAddress from Users where LastName = ?', [lastname], (err, results) => {
        callback(getResultsAsJSON(err, results))
    })
}

function getResultsAsJSON(err, results) {
    if (err) throw err

    return JSON.parse(JSON.stringify(results))
}

module.exports = { getByUsername, getByLastName }