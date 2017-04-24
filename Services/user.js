var mysqlQuery = require('./mysql-connection')

function getUsersByLastname(lastname, callback) {
    mysqlQuery('select Username from Users where LastName = ?', [lastname], callback)
}

module.exports = { getUsersByLastname }