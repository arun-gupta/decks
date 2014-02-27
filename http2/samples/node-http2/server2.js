var fs = require('fs');

var options = {
  key: fs.readFileSync('localhost.keystore'),
  cert: fs.readFileSync('localhost.crt')
};

require('http2').createServer(options, function(request, response) {
  response.end('Hello world!');
}).listen(8080);

