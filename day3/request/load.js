var cheerio = require("cheerio");
var superagent = require("superagent");
var fs = require("fs");

/**
 * http://www.39shubao.com/files/article/html/0/308/54181.html
   http://www.39shubao.com/files/article/html/0/308/54182.html
   http://www.39shubao.com/files/article/html/0/308/121066579.html
*/

for (let i = 54181; i < 55190; i++) {
    superagent
        .get("http://www.39shubao.com/files/article/html/0/308/" + String(i) + ".html")
        .end(function (err, sres) {
            if (err) {
                return console.log(err);
            }
            sres.text = sres.text.replace(/<br\/>/g, "\n");

            var $ = cheerio.load(sres.text);

            fs.appendFile("大圣传.txt", $("#book_text").text(), function (err) {
                if (err) {
                    console.log(err);
                }
            });
        });
}