var express = require('express')
var bodyParser = require('body-parser')
var passwordHash = require('password-hash')
var userService = require('../Services/user')
var profileService = require('../Services/profile')
var routes = express.Router()

routes.use(bodyParser.json())

routes.get('/favicon.ico', () => {})

routes.get('/', (req, res) => {
    res.render('pages/index')
})

routes.get('/login', (req, res) => {
    res.render('pages/login')
})

routes.post('/login', (req, res) => {


    res.send('logged in')
})

routes.get('/:username', (req, res, next) => {
    profileService.getProfileDataByUsername(req.params.username, (user) => {
        if (user)
            return res.render('pages/profile', { user: user })

        next()
    })
})

routes.get('*', (req, res) => {
    res.send('not found')
})

module.exports = routes