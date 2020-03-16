/**
 * 全局对象：
 * 在浏览器是window,在node里面是:global
 * 所有的全局变量都是global的属性
 */


//__filename表示当前正在执行的脚本的文件名，它将输出文件所在位置的绝对路径
console.log(__filename);//F:\Node Projects\day2\全局对象\index.js


//__dirname表示当前脚本所在的目录
console.log(__dirname);//F:\Node Projects\day2\全局对象

//全局函数setTimeout(cb,ms)  setInterval(cb,ms) cb回调函数
//用法同浏览器
//全局函数clearTimeout（t）  clearInterval（t）

//console对象,一般用于调试

//process是一个全局变量
//输出到终端
process.stdout.write("Hello World" + '\n');

//通过参数读取
process.argv.forEach(function (val, index, array) {
    console.log(index + ':' + val);
});

//获取执行路径
console.log(process.execPath);

//平台信息：
console.log(process.platform);

//输出内存使用情况
console.log(process.memoryUsage());

//输出版本
console.log('当前版本:' + process.version);

//输出当前目录

console.log("当前目录：" + process.cwd());