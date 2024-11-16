'use strict';

console.log('a+very+nice+string'.split('+'));
console.log('Ram Sharma'.split(' '));

const [firstName, lastName] = 'Ram Sharma'.split(' ');

console.log(firstName);
console.log(lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name){
    const names = name.split(' ');
    const namesUpper = [];

    for (const n of names){
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0],n[0].toUpperCase()))
    }
    console.log(namesUpper.join(' '));
}



capitalizeName('ram singh tomar');
capitalizeName('mohan sharma');


//Padding
const message = 'Go to gate 25.';
console.log(message.padStart(20,'*').padEnd(30,'#'));
console.log('Ram Sharma'.padStart(20,'$').padEnd(30,'*'));

const maskCreditCard = function(number){
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length,'*');
}



console.log(maskCreditCard(7998456145614561));
console.log(maskCreditCard(7998478356658566));
console.log(maskCreditCard(7998478956));


//Repeat
const message2 = 'Bad weather.... All Departures Delayed....';
console.log(message2.repeat(5));

const planesInLine = function(n){
    console.log(`There are ${n} planes in line ${'🛫 '.repeat(n)}`);    
}


planesInLine(5);
planesInLine(3);
planesInLine(10);












// /////////////////////////////////////
// //PART 2
// const airline = 'TAP Air India';
// // const plane = 'A420';
// //Fix capitalization in name
// const passenger = 'LaxMAn'; //Laxman
// const passengerLower = passenger.toLowerCase(); //laxman
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = 'hello@ram.io';
// const loginEmail = '     Hello@Ram.Io  \n     ';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //replacing
// const priceER = '389,78&';
// const priceUS = priceER.replace('&','$').replace(',','.');
// console.log(priceUS);

// const announcement =
// 'All passengers come to boarding door 25. Boarding door 25!';

// console.log(announcement.replace('door','gate'));
// console.log(announcement.replaceAll('door','gate'));
// // console.log(announcement.replace(/door/g,'gate'));

// //Booleans
// const plane = 'Airebus 512neo';
// console.log(plane.includes('512'));
// console.log(plane.includes('boeing'));
// console.log(plane.startsWith('Aireb'));


// if(plane.startsWith('Airebus') && plane.endsWith('neo')){
//     console.log('New Plane of the Airebus');    
// }

// // example
// const checkBaggage = function(items){
//     const baggage = items.toLowerCase();
//     if(baggage.includes('knife')|| baggage.includes('gun')){
//         console.log('You are NOT allowed on board.');
//     } else {
//         console.log('Welcome aboard!');
//     }

// }


// checkBaggage('I have a laptop, some Food and a pocket Knife.');
// checkBaggage('Socks and camera.');
// checkBaggage('Got some snacks and a gun for protection.');








/////////////////////////////////////
//PART 1
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B420'[0]);

// console.log(airline.length);
// console.log('B420'.length);

// console.log(airline.indexOf('A'));
// console.log(airline.lastIndexOf('A'));
// console.log(airline.indexOf('air'));

// console.log(airline.slice(4));
// console.log(airline.slice(4,6));
// console.log(airline.slice(2,8));

// console.log(airline.slice(0,airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ')+1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1,-1));


// // B and E are middle seats

// const checkMiddleSeat = function(seat){
//     const s = seat.slice(-1);
//     if (s === 'B' || s === 'E') console.log('You got the middle seat 😏 ');
//     else console.log('You got lucky 😎');
// };


// checkMiddleSeat('11B');
// checkMiddleSeat('25C');
// checkMiddleSeat('2E');

// console.log(new String('Ram'));
// console.log( typeof new String('Ram'));

// console.log(typeof new String('Ram').slice(1));


