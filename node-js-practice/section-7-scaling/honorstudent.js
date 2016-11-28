var fun = require('./math');

process.on('message', function(message) {
    if (message.cmd === 'double') {
        console.log("HS: They want me to double the number: " + message.number);
        fun.evenDoubler(message.number, function(err, result) {
            if (err) {
                process.send({answer: 'I got an error '+err.message});
            }
            process.send({answer: result})
        });
    } else if (message.cmd === 'done') {
        process.exit();
    }
});