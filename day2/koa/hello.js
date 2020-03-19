//导入koa，在koa2中，我们导入的是一个class，因此得用大写来表示
var Koa = require("koa");
//创建Koa对象实例
var app = new Koa();

//对于任何请求，app都将会调用异步函数处理请求

//ctx是封装好的request和response，可以通过它访问request和response
//next是Koa传入的将要处理的下一个异步函数

//用async标记的函数是异步函数，在异步函数中可以通过await调用另外一个异步函数（ES7)
/**
 * 为什么要使用await next()？
 * koa把很多async函数组成了一个处理链，
 * 每个async函数都可以做自己的处理，
 * 然后调用next()来进行下一个async函数的调用
 * 这些async函数又称为middleware
 * 如果有一个middleware没有调用next函数，则后续的所有middleware都将不会执行
 * 这种应用场景多用于检查用户权限
 */
// app.use(async (ctx, next) => {
//   await next();
//   ctx.response.type = "text/html";
//   ctx.response.body = "<h1>Hello!Koa2</h1>";
// });

app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`);
  await next();
});

app.use(async (ctx, next) => {
  const start = new Date().getTime(); //当前时间
  await next();
  const ms = new Date().getTime() - start; //耗费时间
  console.log(`Time:${ms}ms`);
});

//ctx中存在简写方法：如ctx.response.type可以简写为ctx.type,
//ctx.request.url可以简写为ctx.url
app.use(async (ctx, next) => {
  await next();
  ctx.response.type = "text/html";
  ctx.response.body = `<h1>Hello koa2</h2>`;
});

app.listen(3000);


//监听
console.log("server start at http://127.0.0.1:3000");
