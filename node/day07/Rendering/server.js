let http = require('http');
let fs = require('fs');

http.createServer(function(request,response){

fs.readFile('./index.html', function(err,data){
    if(err){
        response.writeHead(404);
        response.write('Page not Found');
    }
    else{
        response.writeHead(200, {'content-type':'text/html'});
        response.write(data);
        response.end()
    }
})


}).listen(2020);

console.log('server listening on PORT: 2020' );
