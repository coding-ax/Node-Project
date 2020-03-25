var supperagent = require("superagent");
var cheerio = require("cheerio");
var fs = require("fs");

let URLArr = [];
supperagent
  .get("http://www.yhdm.tv/v/4589-1.html")
  .then(res => {
    var $ = cheerio.load(res.text);
    $(".movurls a").each((index, element) => {
      let item = {
        title: $(element).text(),
        url: $(element).attr("href")
      };
      URLArr.push(item);
      console.log(item);
    });
  })
  .then(res => {
    
    for (item of URLArr) {
      supperagent.get("http://www.yhdm.tv" + item.url).then(res => {
        // console.log("herere222")
        // console.log(res.text);
        var $ = cheerio.load(res.text);
        $("#playbox iframe").each((index, element) => {
          console.log("element");
          let item1 = {
            title: $(element).text(),
            url: $(element).attr("src")
          };
           console.log(item1.url);
        });
    
      });
    }
  });
