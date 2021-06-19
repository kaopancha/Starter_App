var express=require('express')
var routing=express()
routing.get('/',function(req,res){
    res.send("<h1>Hello World</h1>")
})

routing.use('/profile/:name',function(req,res,next){
    // middleware ดักจับ ตรวจสอบ request (แสดงรูปแบบ log)
    console.log("Request:"+ req.params.name + new Date() , req.method,req.url)

    res.send("<h1>Created by "+ req.params.name +"</h1>")
})

// routing.get('/profile/:name',function(req,res){
//     res.send("<h1>Created by "+ req.params.name +"</h1>")
// })
routing.listen(8081)