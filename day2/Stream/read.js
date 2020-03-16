var fs = require("fs");
//创建可读流,指定读向
var readStream = fs.createReadStream("input.txt");

//设置编码
readStream.setEncoding("UTF8");

//处理流事件
/**
 * 流有四种事件：
 * data:表示还有数据可读
 * error:表示流异常
 * finish:全部写入底层系统
 * end:表示已经到达末尾，没有更多的数据可读
 */

//设置监听
var data='';
readStream.on("data", chunk => {
  data += chunk;
});

readStream.on("end", () => {
  console.log(data);
  console.log("读取结束");
});

readStream.on("error", err => {
  console.log(err);
});

console.log("程序执行结束");
