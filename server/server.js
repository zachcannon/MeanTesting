var path = require('path');
var rootPath = path.normalize(__dirname + '/../');
var express = require('express');
var events = require('./eventsController');

var app = express();
app.use(express.static(rootPath + '/app'));

app.get('/',function(req, res) {
    res.sendFile(rootPath + '/app/index.html');
    res.send();
});
app.get('/data/event/:id', events.get);
app.get('/data/event', events.getAll);
app.post('/data/event/:id', events.save);
app.get('*', function(req, res) { res.sendFile(rootPath + '/app/index.html'); });

app.listen(process.env.PORT, 'localhost', (np) => {
  console.log(`LOGGING: Server running at http://localhost:${process.env.PORT}/`);
});
