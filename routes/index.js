var express = require('express')
var users = require('../DAL/users')
var routes = express.Router()

routes.get('/favicon.ico', () => {})

routes.get('/', (req, res) => {
    res.render('pages/index')
})

routes.get('/about', (req, res) => {
    res.render('pages/about')
})

routes.get('/mypage', (req, res) => {
    res.render('pages/mypage')
})

routes.get('/skeleton', (req, res) => {
    res.render('pages/skeleton-demo')
})

routes.get('/:username', (req, res, next) => {
    var username = req.params.username

    users.findByUsername(username, (err, user) => {
        if (err) throw err

        console.log(user)

        if (username == 'SimonAspinall_9')
            return res.render('pages/profile')

        next()
    })
})

routes.get('/users/:lastname', (req, res, next) => {
    var lastname = req.params.lastname

    console.log('lastname')

    users.findBySurname(lastname)
})

routes.get('*', (req, res) => {
    res.send('not found')
})

module.exports = routes