var router = require('./router');
var server = require('./Server');

server.start(router.route);