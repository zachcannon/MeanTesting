const port = 8080;
const path = require('path')
const express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, '../client')));

app.get('/',function(req, res) {
    res.sendFile(__dirname + '../client/index.html');
    res.send()
});
app.listen(port, 'localhost', () => {
  console.log(`LOGGING: Server running at http://localhost:${port}/`);
});