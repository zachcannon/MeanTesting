var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, '../client')));

app.get('/',function(req, res) {
    res.sendFile(__dirname + '../client/index.html');
    res.send();
});
app.listen(process.env.PORT, 'localhost', (np) => {
  console.log(`LOGGING: Server running at http://localhost:${process.env.PORT}/`);
});
