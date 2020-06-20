var http = require('http')

    http.createServer(function(req,res){res.end("OLá")}).listen(8081)

console.log("The sever is UP")