const fs = require('fs');


const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
    // res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My Nodes Server</title></head>');
    res.write('<body><form action="/message" method="POST"><input name="message" type="text"><button type="submit">Send</button></input></form></body>');
    res.write('</html>');
     return res.end();    

    }
if(url === '/message' && method === 'POST'){
    const body = [];
    req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end',()=>{
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        const message = parsedBody.split('=')[1];
        fs.writeFileSync('message.txt',message);
    });
    res.statusCode = 302;
}


// res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>My Nodes Server</title></head>');
res.write('<body><h1>Hello from Nodejs Server.</h1></body>');
res.write('</html>');
res.end();
}

exports.handler = requestHandler;
exports.someText = 'Some hard coded coding...';