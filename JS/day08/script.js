// // /*
// // let abc = 5;
// // // if (abc === 5) alert('Hello World');
// // console.log(40 + 18 + 9 + 6 - 78);
// // console.log("Shri Ram");
// // console.log("1234");

// // // Variable name conventions
// // let firstName = "Sita";
// // // firstNamePerson;
// // // first_name;

// // console.log(firstName);
// // console.log(firstName);
// // console.log(firstName);
// // console.log(firstName);
// // console.log(firstName);
// // console.log(firstName);

// // let myFirstJob = 'Programmer';
// // let myCurrentJob = 'Teacher';

// // let job1 = 'programmer';
// // let job2 = 'teacher';
// // */

// // // let bool = true;
// // // console.log(bool);
// // // let str = "true";
// // // // console.log(str);

// // // // console.log(typeof true);
// // // console.log(typeof bool);
// // // console.log(typeof str);
// // // // console.log(typeof 23);

// // // let year;
// // // console.log(year);
// // // console.log(typeof year);

// // // year = 1993
// // // console.log(typeof year);


// // // console.log(typeof null);

// // let name;
// // let age = 30;
// // age = 31;

// // const birthYear = 1988;
// // // birthYear = 1993;
// // // const job = 'teacher';

// // var job = 'teacher';
// // job = 'programmer';

// // lastName = 'Sharma';
// // console.log(lastName);

// // Math Operators
// const now = 2027;
// const ageRam = now - 1988;
// const ageSita = now - 2009;
// console.log(ageRam, ageSita);
// // console.log(ageRam);
// // console.log(ageSita);


// console.log(ageRam * 2, ageRam / 10, 2 * 3, 2 ** 3);
// //2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// //concat()

// const firstName = 'Ram';
// const lastName = 'Sharma';
// console.log(firstName + ' ' + lastName);

// //Assignment operators
// let x = 10 + 5; // 15
// // x = x + 10;
// x += 10;
// x *= 4;// x = x * 4 = 100
// x++; // x = x + 1;
// x--;// x = x - 1;
// x--;
// console.log(x);

// // Comparison operators

// console.log(ageRam > ageSita); // > , <, <=, >=

// console.log(ageSita >= 18);

// const isFullAge = ageSita >= 18;


// console.log(now - 1991 > now - 2018);


// const now = 2024;
// const ageRam = now - 1988;
// const ageSita = now - 2018;


// console.log(now - 1988 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// console.log(ageRam, ageSita);
// const averageAge = (ageRam + ageSita) / 2;
// console.log(averageAge);

// const firstName = 'Ram';
// const lastName = 'Sharma';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2024;

// const ram = "I'm " + firstName +' '+ lastName + ', a ' + (year - birthYear) + ' year old ' + job + ' !';

// console.log(ram);

// const ramNew = `I'm ${firstName} ${lastName}, a ${year - birthYear} year old ${job} !`;

// console.log(ramNew);

// console.log(`Just a regular string...`);


// console.log('String with \n\
//     multiple \n\
//     lines');

// console.log(`String with
//         multiple
//         lines.`);

// const age = 18;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log('Start driving License 🏎🚗🚓🚕')
// }
// const age = 12;
// if (age>=18) {
//     console.log('Start driving License 🏎🚗🚓🚕')
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Too young, Wait another ${yearsLeft} years.`);
// }

// const birthYear = 2001;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// const inputYear = '1991';
// console.log(inputYear + 10);
// console.log(Number(inputYear), inputYear);

// console.log(Number('Ram'));
// console.log(typeof NaN);

// console.log(String(23), 23);


// type coercion
// console.log('I am ' + 23 + ' year old.');

// console.log('23' - '10' - 3);

// console.log('22' / '2');


// let n = '1' + 1;
// n = n - 1;

// console.log(n);

// let a = 2 + 3 + 4 + '5';

// console.log(a);

// let b = '10' - '4' - '3' - 2 + '5';
// console.log(b);

// we have 5 falsy values:
// 0, '',undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Ram'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const orange = 10;

// if (orange) {
//     console.log("OK");
// } else {
//     console.log("NO");
// }

// let height = 10;
// if (height) {
//     console.log('Height is defined.');
// } else {
//     console.log('Height is UNDEFINED.');
// }

// const age = 18;
// if (age === '18') console.log('You become an adult. (strict)');

// if (age == 18) console.log('You just become an adult.. (loose)');

// const input1 = Number(prompt("What's your favorite number?"));
// console.log(input1);
// console.log(typeof input1);

// if (input1 === 23) {
//     console.log('Wow Luck number 23');
// } else if (input1 === 34) {
//     console.log('Hurray you enter 34 number');
    
// } else if (input1 === 9) {
//     console.log('You Enter 9 number.');
// }
// else {
//     console.log('Number is not 23 or 34 or 9');
//  }

// Challenge No: 1
// Mohan and Ram are trying to compare their BMI(Body Mass Index), which is calculated using
// the formula:
// BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter).
// Your tasks:
// 1. Store Mohan's and Ram's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a Boolean variable 'MohanHigherBMI' containing informaƟon about whether Mohan has a
// higher BMI than Ram.
// Test data:
// Data 1: Mohan weights 78 kg and is 1.69 m tall.Ram weights 92 kg and is 1.95m tall.
//     Data 2: Mohan weights 95 kg and is 1.88 m tall.Ram weights 85 kg and is 1.76m tall.


// // Test case 1
// const massMohan = 78;
// const heightMohan = 1.69;
// const massRam = 92;
// const heightRam = 1.95;

// // Test case 2
// // const massMohan = 90;
// // const heightMohan = 1.88;
// // const massRam = 85;
// // const heightRam = 1.76;

// const BMIMohan = massMohan / (heightMohan ** 2);
// const BMIRam = massRam / (heightRam * heightRam);

// const MohanHigherBMI = BMIMohan > BMIRam;

// // console.log(BMIMohan, BMIRam, MohanHigherBMI);

// // challenge 2
// if (MohanHigherBMI) {
//     console.log(`Mohan BMI (${BMIMohan}) is higher than Ram (${BMIRam}).`);
// } else {
//     console.log(`Ram (${BMIRam}) BMI is higher than Mohan (${BMIMohan}).`);
    
// }

// const hasDriverLicense = true;  //A
// const hasGoodVision = true; //B

// console.log(hasDriverLicense && hasGoodVision);

// console.log(hasDriverLicense || hasGoodVision);

// console.log(!hasDriverLicense);

// let shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Ram is able to drive.');
// } else {
//     console.log('Ram is not able to drive.');
// }

// const isTried = false;

// let shouldDrive = hasDriverLicense && hasGoodVision && isTried;

// let shouldDrive = hasDriverLicense || hasGoodVision || isTried;

// let shouldDrive = hasDriverLicense && hasGoodVision || isTried;

// let shouldDrive = hasDriverLicense && hasGoodVision && !isTried;

// if (shouldDrive) {
//     console.log('Ram is able to drive.');
// } else {
//     console.log('Ram is not able to drive.');
// }

// if (day === 'monday') {
//     console.log('monday');
    
// } else if (day === 'tuesday') {
//     console.log('tuesday');
// } else if (day === 'tuesday') {
//     console.log('tuesday');
// } else if (day === 'tuesday') {
//     console.log('tuesday');
// } else if (day === 'tuesday') {
//     console.log('tuesday');
// } else if (day === 'tuesday') {
//     console.log('tuesday');
// } else if (day === 'tuesday') {
//     console.log('tuesday');
// } else if (day === 'tuesday') {
//     console.log('tuesday');
    
// }






// const day = "1";

// switch (day) {
//     case '1': //day === 'monday'
//         console.log("Today is Monday. Go to coding meeting.");
//         break;
//     case '2': //day==='tuesday'
//         console.log("Today is Tuesday. Goto Playground.");
//         break;
//     case '3': //day==='tuesday'
//         console.log("Today is Wednesday. Goto theory vedios.");
//         break;
//     case '4': //day==='tuesday'
//         console.log("Today is Thursday. Goto codes examples.");
//         break;
//     case '5': //day==='tuesday'
//         console.log("Today is Friday. Goto records vedios.");
//         break;
//     case '6': //day==='tuesday'
//         console.log("Today is Saturday. Goto Goa.");
//         break;
//     case '7': //day==='tuesday'
//         console.log("Today is Sunday. Goto Enjoy weekend.");
//         break;
//     default:
//         console.log("Not a valid day!");
// }

// 3 + 4  //expression
// 1991  //expression
// true && false || !false //expression

// const age = 36;

// if (age > 35) {
//     console.log("This is come from statement 🗽🗽 "); 
// }

// let a = age > 35 ? console.log("This is come from ternary Operater") : console.log("This is come from ternaery FASLE operater");

// console.log(a);



a = 20
b = "Ram"

console.log(`${b} is ${a} year old.${a>=18?"vote":"No vote"}`);
