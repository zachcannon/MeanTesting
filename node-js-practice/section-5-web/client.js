var http = require("http");

console.log("Starting to send request to google");

var options = {
    host: "www.google.com",
    port: "80",
    path: "/",
    method: "GET"
}

http.get(options, function(response) {
   console.log(response.statusCode);
   response.pipe(process.stdout);
});
