var express = require("express");
var cheerio = require("cheerio");
var superagent = require("superagent");

var app = express();

// fetch('http://localhost:3000/').then(res=>res.json()).then(res=>console.log(res))


app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
})

app.get("/", function (req, res, next) {
    superagent.get('https://cnodejs.org/')
        .end(function (err, sres) {
            if (err) {
                return next(err)
            }
            //console.log(sres);//请求下来的数据
            //进行选择
            var $ = cheerio.load(sres.text);
            var items = [];
            $('#topic_list .topic_title').each(function (idx, element) {
                var $element = $(element);
                items.push({
                    title: $element.attr('title'),
                    href: $element.attr('href')
                });

            })
            res.send(items);
        })
});

app.listen(3000, function () {
    console.log('server is listening at port http://localhost:3000');
})