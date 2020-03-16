var fs = require("fs");
var zlib = require("zlib");

/**
 * 压缩：
 */
//压缩input.txt文件为 input.txt.gz;
// fs.createReadStream("input.txt")
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream("input.txt.gz"));

// //打印结束
// console.log("文件压缩完成");

/**
 * 解压
 */
fs.createReadStream("input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("output.txt"));

  console.log('程序执行完毕')