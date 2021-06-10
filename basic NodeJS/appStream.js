// Reader
var fs=require('fs')
var data=''
var readStream=fs.createReadStream('code.txt')
readStream.setEncoding('utf8')
readStream.on('data',function(txt){
    data+=txt
})
readStream.on('end',function(){
    console.log(data);
})
readStream.on('error',function(err){
    console.log(err.stack);
})

// Writer
var wdata='Lorem Ipsum is simply dummy text of the printing and typesetting'
var writerStream=fs.createWriteStream('output.txt')
writerStream.write(wdata,'utf8')
writerStream.end()
writerStream.on('finish',function(){
    console.log("Output Finish");
})


