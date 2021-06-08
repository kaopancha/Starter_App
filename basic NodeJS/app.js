// var buf=new Buffer.alloc(26)
// len=buf.write("Praphan")
// for (var i = 0; i < 26; i++){
//     buf[i]=i+97
// }
// console.log(buf.toString('ascii'));

var buf1=new Buffer.from("Kaopan Chakeaw")
var buf2=new Buffer.from("Node.js Learning")
var buf3=Buffer.concat([buf1,buf2])
var json=buf3.toJSON(buf3)

console.log(buf3.toString());
console.log(json);