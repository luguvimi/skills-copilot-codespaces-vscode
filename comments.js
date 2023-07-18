// Create web server
// 1. Create a web server
// 2. Create a request handler
// 3. Start the server and listen on a port
// 4. Read comments.json file
// 5. Write comments to the response

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

// 1. Create web server
const server = http.createServer();

// 2. Create a request handler
server.on('request', (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  // 4. Read comments.json file
  if (pathname === '/comments') {
    fs.readFile(path.join(__dirname, 'comments.json'), 'utf-8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      // 5. Write comments to the response
      res.writeHead(200, {
        'Content-Type': 'application/json',
      });
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html',
    });
    res.end('<h1>404 Not Found</h1>');
  }
});

// 3. Start the server and listen on a port
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});