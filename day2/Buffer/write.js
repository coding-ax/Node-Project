var buf1 = Buffer.alloc(64);

//write方法写入后返回buf写入长度
var len = buf1.write('千军万马退');

console.log('写入的字符串的字节数：' + len);//15(每个汉字3个字节)

//千军万马退AX！
console.log(buf1);
console.log(buf1.toString('utf-8',0,3));//千
console.log(buf1.toJSON());