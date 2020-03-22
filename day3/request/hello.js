var request = require('request');
var fs = require('fs');

/**
 * url 地址
 * filename文件名
 * callback回调函数
 */

// function downloadFile(url, filename, callback) {
//     var stream = fs.createWriteStream(filename);
//     console.log(request);
//     request.get(url).pipe(stream).on('close', callback);
// }
 
// var fileUrl = 'https://api.apiopen.top/searchMusic?name=我爱你'
// function sayOk() {
//     console.log("ok");
// }
// var filename = "ans.txt";
// downloadFile(fileUrl, filename, sayOk);


var url = 'http://api.guaqb.cn/v1/onesaid/'

// 发送Get请求
// 第一个参数:请求的完整URL,包括参数
// 第二个参数:请求结果回调函数,会传入3个参数,第一个错误,第二个响应对象,第三个请求数据
request(url, function (error, response, data) {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(response);
    fs.appendFile('Dell', data+'\n', (err,res,dat) => {
    })
    // console.log(data)
    
});