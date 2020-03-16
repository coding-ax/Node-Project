var buf = Buffer.from('AX 是帅哥 666', 'utf-8');

//可以切换buf的编码格式
// console.log(buf.toString('ascii'));

//默认用0填充buf1
const buf1 = Buffer.alloc(1024);

//用1填充buf2
const buf2 = Buffer.alloc(1024, 1);

/**
 * 创建一个长度为10，且未初始化的Buffer
 * 这个方法比调用Buffer.alloc（）更快
 * 但返回的Buffer实例可能包含旧数据
 * 需要使用fill()或者write()重写
 */
const buf3 = Buffer.allocUnsafe(1024);

//可以使用数组创建buf 
//包含0x1 0x2 0x3 0x4
const buf4 = Buffer.from([1, 2, 3, 4]);

//也可以通过字符串进行初始化
const buf5 = Buffer.from('test');

//使用上述方法时，可以同时指定编码
const buf6 = Buffer.from('test', 'utf-8');