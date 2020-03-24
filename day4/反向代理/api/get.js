var Koa = require("koa");
var superagent = require("superagent");
var cors = require('koa2-cors');


var path = "";
var app = new Koa();

app.use(cors());


var ans = {};
function agent(path) {
  superagent
    .get(path)
    .then(res => {
      // console.log(res.text);
      ans = JSON.parse(res.text);
      console.log(ans);
    })
    .then(res => {
      app.use(async (ctx, next) => {
        await next();
        ctx.response.type = "application/javascript";
        ctx.response.body = ans;
      });

      app.listen(3000);
    });
}


console.log("server start at http://localhost:3000");
agent("https://v1.alapi.cn/api/zhihu/latest");
