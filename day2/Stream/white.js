var fs = require('fs');

var data = "你好，我是AX！";
//创建可写流
var whiteStream = fs.createWriteStream("output.txt");

whiteStream.write(data, 'UTF8');

//标记文章末尾,结束流
whiteStream.end();

//处理流事件:
whiteStream.on('finish', () => {
    console.log('已经写入')
})

whiteStream.on('error', (err) => {
    console.log(err);
})

console.log('程序执行完毕')