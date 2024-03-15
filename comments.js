// Create a web server that listens for requests to /comments and serves up the
// comment data. You can use the comments variable below as a mock database.
// The comments should be sorted with the newest first.

// To test your server, run it and open a web browser. Then navigate to
// http://localhost:4000/comments

// To get the comments as a JSON response, send an Accept header with the value
// application/json.

var http = require('http');
var comments = require('./comments.json');

var server = http.createServer(function(req, res) {
  if (req.url === '/comments') {
    if (req.headers.accept === 'application/json') {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(comments));
    } else {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      comments.forEach(function(comment) {
        res.write(comment.name + '\n');
        res.write(comment.comment + '\n\n');
      });
      res.end();
    }
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
});

server.listen(4000);
console.log('Server is listening on port 4000');
