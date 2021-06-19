var express=require('express')
var app=express()
app.set('view engine','ejs')

app.get('/',function(req,res){
    var pdata={name:"Kaopancha", age:20, job:"Programmer"}
    res.render('profile',{user:pdata})
})
// ส่งค่า params ต่อท้าย route
app.get('/:facebook',function(req,res){
    res.render('contact',{facebook:req.params.facebook})
})
app.listen('8081')