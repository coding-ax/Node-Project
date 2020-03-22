var cheerio = require("cheerio");
var superagent = require("superagent");
var fs = require("fs");
var readlineSync = require("readline");
var iconv = require("iconv-lite");
//定义下载函数：
function downLoadTxt(path) {
  //用来存储章节的URL
  var listItem = [];
  //用来保存书名
  var name = "";
  superagent
    .get(path)
    .then(res => {
      // console.log(res.text);
      var $ = cheerio.load(res.text);
      $("#chapterlist a").each((index, element) => {
        var $element = $(element);
        listItem.push($element.attr("href"));
      });
      $(".info h1").each((index, element) => {
        return (name = $(element).text());
      });

      console.log(listItem[0], listItem[listItem.length - 1], listItem.length);
    })
    .then((err, res) => {
      for (item of listItem) {
        superagent.get("http://www.39shubao.com" + item).end((err, res) => {
          if (err) {
            return;
          }
          res.text = res.text.replace(/<br\/>/g, "\n");

          var $ = cheerio.load(res.text);

          fs.appendFile(name + ".txt", $("#book_text").text(), err => {
            if (err) console.log(err);
          });
        });
      }
    });
}

function readSyncByfs(tips) {
  tips = tips || "> ";
  process.stdout.write(tips);
  process.stdin.pause();

  const buf = Buffer.allocUnsafe(10000);
  let response = fs.readSync(process.stdin.fd, buf, 0, 10000, 0);
  process.stdin.end();

  return buf.toString("utf8", 0, response).trim();
}

// var a = readSyncByfs('请输入任意字符：');
// console.log(a);
//定义搜索数组：

function menu(name) {
  var titleArray = [];
  //指定搜索的路径：
  var path = "http://www.39shubao.com/files/article/html/15/15007/";
  superagent
    .post("http://www.39shubao.com/modules/article/search.php")
    .type("form")
    .send({ entry: "1", ie: "gbk", q: name })
    .then(res => {
      console.log(name);
      var $ = cheerio.load(res.text);
      $(".odd a").each((index, element) => {
        var $element = $(element);
        titleArray.push({
          name: $element.text(),
          url: $element.attr("href")
        });
      });
    })
    .then(res => {
      let i = 1;
      for (item of titleArray) {
        console.log(i++, item.name);
      }
      var ans = readSyncByfs("请选择要下载的书籍：");
      while (ans <= 0 && ans > titleArray.length) {
        var ans = readSyncByfs("你的选择有误，请重新输入：");
      }
      var path = titleArray[parseInt(ans) - 1];
      console.log(path);
      downLoadTxt(path.url);
    });
}

var name = readSyncByfs("请输入你要下载的书籍名称:");
name = "BOSS";
name=name.toString('gbk')
console.log(name);
menu(name);
