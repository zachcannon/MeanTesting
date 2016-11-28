const http = require('http');
const fs = require('fs');

const hostname = process.env.IP;
const port = process.env.PORT;

http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/file.txt') {
    fs.createReadStream(__dirname + '/file.txt').pipe(res);
  } else {
      res.end('Hello World\n');
  }
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});