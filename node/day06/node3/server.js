let events = require('events');
let eventEmitter = new events.EventEmitter();


let myHandler = function(){
    console.log("myHandler 1");
    eventEmitter.emit('event4', 'this is event 4 mssage');
    eventEmitter.emit('event2');
}

let myHandler2 = function(){
    console.log("myHandler 2");
}

let event3 = function(){
    console.log("Welcome event 3");
}

eventEmitter.on('event4',function(msg){
    console.log("Welcome to event 4");
    console.log(msg);
let i = 0;
    eventEmitter.on('event5', function(){
        console.log(i++);
    })
    
})

eventEmitter.on('event1', myHandler);
eventEmitter.on('event2', myHandler2);
eventEmitter.on('event3', event3);
eventEmitter.once('event6', function(){
    console.log('Event 6');
    
})

eventEmitter.emit('event1');
eventEmitter.emit('event3');
eventEmitter.emit('event5');
eventEmitter.emit('event5');
eventEmitter.emit('event5');
eventEmitter.emit('event6');
eventEmitter.emit('event6');
eventEmitter.emit('event6');