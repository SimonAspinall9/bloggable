var express = require('express')
var routes = require('./routes')
var expressLayouts = require('express-ejs-layouts')
var app = express()
var port = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(expressLayouts)
app.use(express.static(__dirname + '/public'))
app.use('/', routes)

app.listen(port, () => {
    console.log('listening on port: ' + port)
})