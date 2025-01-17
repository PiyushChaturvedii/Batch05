let fs = require('fs');
let http = require('http');

http.createServer(function(request,response){

    var dataContent = "This is a content for test writing in abc.txt file.";
    var writer = fs.createWriteStream('abc.txt');
    writer.write(dataContent, 'utf-8');
    writer.end();
    writer.on('finish',function(){
        console.log('writing completed.');
    }).on('error',function(err){
        console.log(err);
    })

    let pipeReader = fs.createReadStream('abc.txt');
    let pipeWriter = fs.createWriteStream('xyz.txt');
    pipeReader.pipe(pipeWriter);

    pipeWriter.on('finish', function(){
        var content = '';
        var reader = fs.createReadStream('abc.txt');
        reader.setEncoding('utf-8');
        reader.on('error',function(err){
            console.log(err);
        }).on('data',function(chunk){
            content += chunk;
        }).on('end', function(){
            response.on('error',function(err){
                console.log(err);
            });
            response.setHeader('200',{'Content-Type':'plain/text'})
            response.write(content);
            response.end();
        })

    })

    


}).listen(8080);

console.log('Server is running on Port 8080');
