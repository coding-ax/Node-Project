var cheerio = require("cheerio");
var superagent = require("superagent");
var fs = require("fs");

/**http://www.39shubao.com/files/article/html/107/107200/112021832.html
 * http://www.39shubao.com/files/article/html/107/107200/112021833.html
*/
//http://www.39shubao.com/files/article/html/107/107200/127737381.html

var listItem = [];
superagent
    .get('http://www.39shubao.com/files/article/html/107/107200/')
    .then((res) => {
        // console.log(res.text);
        var $ = cheerio.load(res.text);
        $('#chapterlist a').each((index,element) => {
            var $element = $(element);
            listItem.push($element.attr('href'));
        })
        console.log(listItem[0],listItem[listItem.length-1],listItem.length)
    })
    .then((err, res) => {
        for (item of listItem) {
            superagent.get("http://www.39shubao.com"+item)
                .end((err, res) => {
                    if (err) {
                        return console.log(err)
                    }
                    res.text = res.text.replace(/<br\/>/g, "\n")
                    
                    var $ = cheerio.load(res.text);

                    fs.appendFile("终极斗罗.txt", $("#book_text").text(), err => {
                        if(err)
                        console.log(err)
                    });
            })
        }
    })

// for(item of listItem) {
//     console.log(item);
// }

// http://www.39shubao.com/files/article/html/107/107200/129795152.html
    // superagent
    //     .get("http://www.39shubao.com/files/article/html/0/308/" + String(i) + ".html")
    //     .end(function (err, sres) {
    //         if (err) {
    //             return console.log(err);
    //         }
    //         sres.text = sres.text.replace(/<br\/>/g, "\n");

    //         var $ = cheerio.load(sres.text);

    //         fs.appendFile("大圣传.txt", $("#book_text").text(), function (err) {
    //             if (err) {
    //                 console.log(err);
    //             }
    //         });
    //     });
