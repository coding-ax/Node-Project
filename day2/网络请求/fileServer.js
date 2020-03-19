var url = require('url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

var path = require('path');

var workDir = path.resolve('.');

var filePath = path.join(workDir, 'pub', 'index.html');
