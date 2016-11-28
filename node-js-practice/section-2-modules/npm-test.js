var request = require("request");

request("http://pluralsight.com/", function(error, response, body) {
   if (!error && response.statusCode === 200) {
       console.log(body);
   } 
});