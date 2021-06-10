var fs=require('fs')
var reader=fs.createReadStream('code.txt')
var writer=fs.createWriteStream('pipeOutput.txt')
reader.pipe(writer)