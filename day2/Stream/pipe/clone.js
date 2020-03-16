var fs = require('fs');

//创建一个可读流
var readStream = fs.createReadStream('input.txt');

//创建一个可写流
var whiteStream = fs.createWriteStream('output.txt');

//建立管道

readStream.pipe(whiteStream);

//结束
console.log('程序结束')