var fs = require('fs');

    var data ='';
fs.open('input.txt', 'r+', (err, file) => {

    if (err) {
        console.log(err.stack);
    }
    data += file;
    console.log(file);
    console.log(data);
    console.log('文件打开成功');
})

fs.stat('input.txt', (err, stats) => {
    if (err) {
        return console.error(err.stack);
    }
    console.log(stats);
    console.log("读取文件成功");

    //检测文件类型
    console.log("是否为文件？" + stats.isFile());
    console.log("是否为目录？" + stats.isDirectory());
})