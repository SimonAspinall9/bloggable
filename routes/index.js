var express = require('express')
var routes = express.Router()

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

routes.get('/profile', (req, res) => {
    res.render('pages/profile')
})

routes.get('*', (req, res) => {
    res.send('not found')
})

module.exports = routes