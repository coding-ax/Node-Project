var superagent = require("superagent");
var fs = require("fs");

var cookie = fs.readFileSync("cookie.json");
cookie = JSON.parse(cookie.toString());

let header = {
  Host: "sso.jwc.whut.edu.cn",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "Accept-Language":
    "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
  "Accept-Encoding": "gzip, deflate",
  "Content-Type": "application/x-www-form-urlencoded",
  "Content-Length": 265,
  Origin: "http://sso.jwc.whut.edu.cn",
  Connection: "keep-alive",
  Referer: "http://sso.jwc.whut.edu.cn/Certification/login.do",
  Cookie:
    "JSESSIONID=BB614569091E610A5C73418993610DD0; CERLOGIN=eLmQwvBkKmG1%2FgJyYWoR0GDP6FsSfhg8WpXo2SApDfG1rM7zt3mhqeXXZtaB%2BrAN7zHI5iyBmlOy%0A8APJzW13vNk6pSB0dQA74iN0pOJPpaUqoM%2BRSKtVCl7mmqMuBofRN0d3LQQtv9vkjrqvIWR7O57u%0Au%2B06Nnt7u4nc6kKKywI%3D%0A%23gkkXUjQ0Qk6%2BkJ5%2Fy1Ruq0%2FLv4ZDlLmhGRZcnI7Kzm9RKrr8HE%2FJxPLpM36k%2FR4oTbXo8ONRDNws%0AopM8fWKRq5QJiIUJK%2B2fGwlAZp4jMLF5Fj3xj1IfKfjYEFawdZmr8i2JMZjyZyzHY4xx1O3fP%2Bx0%0AZ1oo7UAGZB8qQ8blK1M%3D%0A%23",
  "Upgrade-Insecure-Requests": 1,
};
// console.log(typeof cookie);
// console.log(cookie);
function getCookie() {
  superagent
    .post("http://sso.jwc.whut.edu.cn/Certification/login.do")
    .set("header", header)
    .type("form")
    .send({
      MsgID: "",
      KeyID: "",
      UserName: "",
      Password: "",
      rnd: "42725",
      return_EncData: "",
      code: "3418956933",
      userName1: "9c518de98e8b84c94fd2932ceda771d6",
      password1: "20b37818d645b6307eb3f9fb2d9b38c4269aa9d2",
      webfinger: "2bb09e3b434a6c6dc37c6e76638c6441",
      type: "xs",
      userName: "0121810870217",
      password: "AX.xgp000908",
    })
    .end(function (err, res) {
      if (err) {
        console.log(err);
        return;
      }
        console.log(res.text);
        fs.createWriteStream("res.json").write(res.text);
      // cookie = res.header['set-cookie']; //从response中得到cookie
      // emitter.emit("setCookeie");
    });
}
getCookie();
