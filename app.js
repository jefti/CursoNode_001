var http = require('http');

let port = 8081
http.createServer( function (req, res){
    res.end("Welcome")
}).listen(port)

console.log(`Servidor rodando na porta ${port}`)