var Koa = require('koa');
var cors = require('koa2-cors');
var superagent = require('superagent');
var path = "";
var app = new Koa();
app.use(cors());
var ans = null;
function agent(path) {
  superagent
    .get(path)
    .then(res => {
      // console.log(res.text);
      ans = JSON.parse(res.text);
    })
    .then(res => {
      app.use(async (ctx, next) => {
        await next();
        ctx.response.type = "application/javascript";
        ctx.response.body = ans;
      });

      app.listen(9000);
    });
}
// "http://47.102.197.109:8888/api/course?un=0121810870217&pwd=AX.xgp000908"

console.log("server start at http://localhost:9000");
// agent("http://47.102.197.109:8888/api/course?un=0121810870217&pwd=AX.xgp000908");

