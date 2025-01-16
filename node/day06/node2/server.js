var http = require('http');
var evaulate = require('./evaulate');
var custom = require('./custom');
var module3 = require('./module3');


function onrequest(request,response){
    response.writeHead(200,{'content-type':'text/plain'});
    response.write('Welcome to Node.js');
    response.write('\n'+evaulate.sum(4,5));
    response.write('\n'+evaulate.str);
    response.write('\n'+evaulate.multiply(5,6));
    response.write('\n'+ custom.dt());
    response.write('\n'+ custom.mystr);
    response.write('\n'+ custom.mystr2);
    response.write('\n'+ module3.myfunction());

    response.end();
}
http.createServer(onrequest).listen(8080);


console.log('Server listen at 8080');
