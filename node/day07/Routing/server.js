let http = require('http');
let fs = require('fs');
let url = require('url');

http.createServer(function(request,response){

    let path = url.parse(request.url).pathname;
    console.log(path);

    switch(path){
        case '/': 
            renderHTML('./index.html',response);
            break;
        case '/about':
            renderHTML('./about.html',response);
            break;
        case '/service':
                renderHTML('./service.html',response);
                break;
        case '/login':
                renderHTML('./login.html',response);
                break;
        default:
            response.writeHead(404);
            response.write('Page not Found');
            response.end();
    }

}).listen(3000);

console.log('server listening on PORT: 3000' );

function renderHTML(path,response){
    fs.readFile(path, "utf-8", function(err,data){
        if(err){
            response.writeHead(404);
            response.write('Page not found');
        }
        else{
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data);
        }
        response.end();
    })
}