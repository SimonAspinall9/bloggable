var mysqlQuery = require('./mysql-connection')

function getProfileDataByUsername(username, callback) {
    mysqlQuery('select Username, FirstName, LastName, EmailAddress from Users where Username = ?', [username], (results) => {
        if (results)
            callback(results[0])
    })
}

function getProfileWelcomeVideo(username, callback) {
    mysqlQuery('select Username from Users where Username = ?', [username], callback)
}

module.exports = { getProfileDataByUsername, getProfileWelcomeVideo }