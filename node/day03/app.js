const http = require('http');

const server = http.createServer((req,res)=>{
// console.log(req.url, req.method, req.headers);
// process.exit();
const url = req.url;
if(url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My Nodes Server</title></head>');
    res.write('<body><h1>Hello from Home Page</h1></body>');
    res.write('</html>');
    res.end();    
}else if(url === '/message'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My Nodes Server</title></head>');
    res.write('<body><form action="/" method="POST"><input name="message" type="text"><button type="submit">Send</button></input></form></body>');
    res.write('</html>');
     return res.end();    
}else{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My Nodes Server</title></head>');
    res.write('<body><h1>Goto HomePage</h1></body>');
    res.write('</html>');
    res.end();
}
});

server.listen(3000)