var mathFun = require("./math");

var processResults = function(err, result, time) {
    if (err) {
        console.log("Error: " + err.message);
    } else {
        console.log("The results are: " + result + " With wait time: " + time);
    }
};

for (var i=0; i<10; i++) {
    console.log("Calling Even Doubler with parameter " + i);
    mathFun.evenDoubler(i, processResults);
}

console.log("----");
