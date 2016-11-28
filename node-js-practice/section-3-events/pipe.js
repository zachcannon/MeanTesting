var request = require("request");
var fs = require("fs");
var zlib = require("zlib");

request("http://pluralsight.com/").pipe(zlib.createGzip()).pipe(fs.createWriteStream("homepage.html.gz"));