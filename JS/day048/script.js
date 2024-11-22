// const secureBooking = function(){
//     let passengerCount = 0;
    
//     return function () {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//         let b = 10;
//     }
    
    
// }

// const booker = secureBooking();

// booker();
// booker();
// booker();
// console.log(booker);
// console.dir(booker);


// // console.log(passengerCount);

let f;

const g = function(){
    const a = 40;
    f = function() {
        console.log( a * 2);
    }
}

const h = function(){
    const b = 7;
    f = function() {
        console.log(b * 2);
    }
}


g();
f();
console.dir(f);

//Re-assigning f function
h();
f();
console.dir(f);




//Example 2
const boardPassengers = function(n, wait){
    const perGroup = n /3;

    setTimeout(function() {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    },wait*1000);

    console.log(`Will start boarding in ${wait} seconds`);
};


const perGroup = 1000;
boardPassengers(180, 4)

// setTimeout(function(){
//     console.log('TIMER');
// },1000);



///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/