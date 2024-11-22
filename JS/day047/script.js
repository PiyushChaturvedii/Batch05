// const india = {
//     airline: 'AirIndia',
//     iataCode: 'AI',
//     bookings: [],
//     // book: function() {}
//     book(flightNum, name){
//         console.log(
//             `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//         );
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`,name})
//     },
// };

// // india.book(125, 'Ram Sharma');
// // india.book(234,'Mohan Lal');
// // india.book(322,'Sita Devi');
// // // console.log(india);

// const srilanka = {
//     airline: 'SriAir',
//     iataCode: 'SA',
//     bookings: [],

// };

// const book = india.book;
// // // does NOT work
// // // book(23,'mohit');

// // // const book:(flightNum:any,name:any)=>void

// // // Call method
// // book.call(srilanka, 23, 'mohit');
// // // console.log(srilanka);

// // book.call(srilanka, 30, 'rohit');
// // // console.log(srilanka);

// const dubai ={
//     airline: 'dubaiAirways',
//     iataCode: 'DA',
//     bookings:[],
// }

// const us ={
//     airline: 'UnitedAirways',
//     iataCode: 'US',
//     bookings:[],
// }

// // // book.call(dubai, 98, 'Rohit');
// // // book.call(dubai, 80, 'Sunita');
// // // console.log(dubai);

// // //Apply method
// // const flightData = [235, 'Ram Sharma'];
// // // book.apply(dubai,flightData);
// // // console.log(dubai);


// // // book.call(dubai,...flightData)


// //Bind method
// // book.call(srilanka, 23, 'Ram Sharma');
// const bookSA = book.bind(srilanka);
// const bookDA = book.bind(dubai);
// // bookSA(23, 'Ram Sharma');
// // bookDA(23, 'Ram Sharma');

// const bookUS311 = book.bind(us, 311);
// // bookUS311('Mohan Gupta');
// // bookUS311('Sohan Gupta');
// // bookUS311('Rohan Gupta');

// //With Event Listerners
// india.planes = 3000;
// india.buyPlane = function(){
//     console.log(this);

//     this.planes++;
//     console.log(this.planes);
// };

// document.querySelector('.buy').addEventListener('click',india.buyPlane.bind(india)
// );

// //Partial application
// const addTax = (rate,value) => value + value * rate;
// console.log(
//     addTax(0.1,200)
// );

// const addVat = addTax.bind(null,0.23);
// // addVat = value => value + value * 0.23;

// console.log(addTax(0.23,100));
// console.log(addVat(100));


// const addTaxRate = function (rate){
//     return function (value){
//         return value + value * rate;
//     }
// }
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/




// const runOnce = function(){
//     console.log('This will never run again');
// }
const Global = 50;


(function(){

    console.log('That will never run');  
    const isPrivate = 45;
    var notPrivate = 55;
    console.log(Global);
})(); //IIFE 

// console.log(isPrivate);


    (()=>console.log('Jai Shree Ram'))();

{
    const a = 10;
    var b = 30;
}

// console.log(a);
console.log(b);

