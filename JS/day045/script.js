'use strict';

const greet = function (greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    };
}

const greeterHello = greet('Hello');
greeterHello('ram');
greeterHello('mohan');


greet('hi')('Sita');


const greetArr = greeting => name =>{
    console.log(`${greeting} ${name}`);
}

greetArr('Hi')('Mohan');






// const oneWord = function (str){
//     return str.replace(/ /g,'').toLowerCase();
// };

// const upperFirstWord = function(str){
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(),...others].join(' ');
// }

// //Higher-order function
// const transformer = function(str,fn){
// console.log(`Original string: ${str}`);
// console.log(`Transformed string: ${fn(str)}`);
// console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// //JS uses callbacks all the time

// const high5 = function () {
//     console.log('Hello');
// }

// document.body.addEventListener('click',high5);

// console.log('ram');











// const bookings = [];

// const createBooking = function(
//     flightNum, 
//     numPasserngers = 1, 
//     price = 199 * numPasserngers,
// ){
    
//     // ES5
//     // numPasserngers = numPasserngers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPasserngers,
//         price,
//     }
//     console.log(booking);
//     bookings.push(booking);    
// }

// createBooking('SY123');

// console.log(bookings);

//////////////////////////////////////////
//Ref vs value
// const flight = 'SY123';
// const ram = {
//     name: 'Ram Sharma',
//     passport: 7894563256987
// }


// const checkIn = function(flightNum, passenger){
//     flightNum = 'SY456';
//     passenger.name = 'Mr. ' + passenger.name;

//     if(passenger.passport === 7894563256987){
//         alert('checked in');
//     }else{
//         alert('Wrong passport!')
//     }
// }

// checkIn(flight, ram);
// console.log(flight);
// console.log(ram);


// // is the same as doing...
// const flightNum = flight;
// const passenger = ram;
// console.log(passenger);


// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random()* 10000000000);
// }

// newPassport(ram);
// checkIn(flight,ram);
// console.log(flight,ram);
////////////////////////////////////

