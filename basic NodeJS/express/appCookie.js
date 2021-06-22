// Express
var express = require('express')
var app = express()
// Cookie-parser
var cookie = require('cookie-parser')
app.use(cookie())

app.set('view engine','ejs')
app.get('/createCookie',function(req,res){
    res.cookie('myCookie','Kaopan')
    res.end("Create Cookie")
})
app.get('/delCookie',function(req,res){
    res.clearCookie('myCookie')
    res.end("Delete Cookie Complete")
})

app.listen(8081)