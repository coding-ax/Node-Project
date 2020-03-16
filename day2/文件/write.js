var fs = require("fs");

console.log("准备写入文件");

fs.writeFile("output.txt", "我是被写入的内容", function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("数据写入成功");
  console.log("------分割线------");
  console.log("准备读取文件");
  fs.readFile("output.txt", function(err, data) {
    if (err) {
      return console.log("连接失败");
      }
      console.log("读取到的数据：" + data.toString());
  });
});
