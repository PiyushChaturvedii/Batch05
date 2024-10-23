// console.log(me);
// console.log(job);
// console.log(year);


// var me = 'Ram';
// let job = 'teacher';
// const year = 1991;


//Function
// console.log(addDec(2,3));
// console.log(addExp(2,3));
// console.log(addArrow(2,3));

// function addDec(a,b) {
//     return a + b;
// }

// var addExp = function(a,b){
//     return a + b;
// }

// var addArrow = (a, b) => a + b;

// //Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted!');
    
// }

// var x =1 ;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);


// console.log(this.confirm("Are you healthy?"));

// console.log(window.confirm("are you healthy?"));

// const calcAge = function (birthYear) {
//     console.log(2024 - birthYear);
//     console.log(this);
    
// }

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//     console.log(2024-birthYear);
//     console.log(this);
// }

// calcAgeArrow(1990);

// const ram = {
//     year: 1991,
//     calcAge: function (){
//         console.log(this);
//         console.log(2024-this.year);
        
//     }
// }

// ram.calcAge();

// const sita ={
//     year: 2017
// }

// sita.calcAge = ram.calcAge;

// sita.calcAge();

// var firstName = "sita";


// const ram = {
//     firstName: 'Ram',
//     year: 1991,
//     calcAge: function () {
//         console.log(2024 - this.year);
//         // const self = this;
//         // const isMillenial = function () {
//         //     console.log(self);
//         //     console.log(self.year >= 1980 && self.year <= 2000);    
//         // }

//         // isMillenial();
//         // },

//         const isMillenial = () => {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996);
//         }

//         isMillenial()
//     },
//     greet: () => {
//      console.log(this);
     
//         console.log(`Hello ${this.firstName}`)
//     }
// }

// // ram.greet();
// ram.calcAge();

let lastName = 'Sharma';
let oldLastName = lastName;
lastName = 'Ram';
console.log(lastName, oldLastName);

const sita = {
    firstName: 'sita',
    lastName: 'sharma',
    age: 27,
}

const marriedSita = Object.assign({},sita);

marriedSita.lastName = 'verma';
console.log('Before marriage:', sita);
console.log('After marriage:', marriedSita);
