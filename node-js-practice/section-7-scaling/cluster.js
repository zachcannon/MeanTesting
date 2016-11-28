var cluster = require("cluster");
var http = require("http");
var numworkers = 2;

if (cluster.isMaster) {
    // Fork Workers
    for (var i=0; i<=numworkers; i++) {
        console.log('Master is forking a worker');
        cluster.fork();
    }
    
    cluster.on('fork', function(worker) {
       console.log('Master: I forked a new worker: ' + worker.id); 
    });
    
    cluster.on('online', function(worker) {
       console.log('Master: worker is oneline: '+ worker.id); 
    });
    
    cluster.on('listening', function(worker, address) {
       console.log('Master: worker '+worker.id+' is listening at address ' + address.address + ':' + address.port); 
    });
    
    cluster.on('exit', function(worker, code, signal) {
       console.log('Master: exit event called: ' + worker.id); 
    });
} else {
    console.log('Worker: worker #' + cluster.worker.id + 'is ready');
    
    var count = 0;
    
    http.createServer(function(req, res) {
       res.writeHead(200);
       count++;
       console.log('Worker: id #'+cluster.worker.id+' is incrementing the count to: '+ count);
       res.end('hello world from worker # '+cluster.worker.id + 'with counter ' + count);
       if (count === 3) {
           cluster.worker.destroy();
       }
    }).listen(process.env.PORT,process.env.IP);
}