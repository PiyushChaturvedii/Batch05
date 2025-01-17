let http = require('http');
let fs = require('fs');

http.createServer(function(request,response){
    fs.readFile('./user.json',"utf-8",function(err,data){
        response.writeHead('200',{"content-type":'application/json'});

        data= JSON.parse(data);

        response.end(JSON.stringify(data));

    })


    // let myobj = {id:202, name: 'ram', age: 25};

    // response.end(JSON.stringify(myobj));



}).listen(2020);

console.log('server listening on PORT: 2020' );
