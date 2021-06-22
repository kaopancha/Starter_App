// Express
var express = require('express')
var app = express()
// Body-parser
var body = require('body-parser')
app.use(body())

app.set('view engine','ejs')
app.get('/showForm',function(req,res){
    res.sendFile(__dirname+"/"+"showForm.html")
})
app.post('/showData',function(req,res){
    data={
        fname:req.body.fname,
        lname:req.body.lname
    }
    console.log(data)
    res.end("<h1> Firstname :"+data.fname+"</h1>")
})

app.listen(8081)
