var http = require('http');

function onrequest(request,response){
    response.writeHead(200,{'content-type':'text/plain'});
    response.write('Welcome to Node.js');
    response.end();
}
http.createServer(onrequest).listen(8080);


console.log('Server listen at 8080');
