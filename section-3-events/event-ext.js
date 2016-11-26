var Resource = require('./resourse');

var r = new Resource(10);

r.on("start", function() {
    console.log("I have started!");
});

r.on("data", function(data) {
   console.log("I have data: " + data); 
});

r.on("end", function(t) {
    console.log("I am done with " + t + " events.");
});