// // console.log("I am go to School. day 1");
// // console.log("I am go to School. day 2");
// // console.log("I am go to School. day 3");
// // console.log("I am go to School. day 4");
// // console.log("I am go to School. day 5");
// // console.log("I am go to School. day 6");
// // console.log("I am go to School. day 7");
// // console.log("I am go to School. day 8");
// // console.log("I am go to School. day 9");
// // console.log("I am go to School. day 10");


// // FOR loop keeps running while condition is TRUE

// // for (let x = 1; x <= 10; x+=2){
// //     console.log(`I am go to School. day ${x}`);
// // }

// const RamArray = [
//     'Ram',
//     'Sharma',
//     2024 - 1991,
//     'teacher',
//     ['rohan', 'mohan', 'sohan'],
  
// ]
// const types = [];

// // console.log(RamArray[0]);
// // console.log(RamArray[1]);
// // console.log(RamArray[2]);
// // console.log(RamArray[3]);
// // console.log(RamArray[4]);

// // for (let i = 0; i < RamArray.length; i++){
// //     console.log(RamArray[i], typeof RamArray[i]);

// //     types[i] =  typeof RamArray[i];

// // }

// // console.log(types);

// const years = [1991, 1987, 1956, 1974, 2022,2004,2006];
// const age = [];

// for (let i = 0; i < years.length; i++){
//     age.push(2024 - years[i]);
// }

// console.log(age);




// 0 to 10 counting print

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//2 table till 10

// for (let i = 2; i <= 10; i++) {
//     console.log(i*2);
// }

// 2 * 2 = 4
// for (let i = 2; i <= 10; i++) {
//     console.log(`2 * ${i} = ${i*2}`);
// }
// table number given by user
// const j = prompt("Enter the number for table.");

// for (let i = 1; i <= 10; i++) {
//     console.log(`${j} * ${i} = ${j*i}`);
// }
//table number and count is given by user
// const j = prompt("Enter the number for table.");
// const count = prompt("Enter the count of table.");

// for (let i = 1; i <= count; i++) {
//     console.log(`${j} * ${i} = ${j*i}`);
// }

// const years = [1998, 1997, 2001, 2012];
// const ages = [];

// for (let i = 0; i < years.length; i++){
//     ages.push(2024 - years[i]);
// }

// console.log(ages);


// for (let i = 0; i < RamArray.length; i++){
//     types.push(typeof(RamArray[i]))
// }
// console.log(types);

//continue and break
// for (let i = 0; i < RamArray.length; i++){
//   if(typeof RamArray[i] !== 'string') continue
//     types.push(typeof (RamArray[i]))
// }
// console.log(types);

//break
// for (let i = 0; i < RamArray.length; i++){
//   if(typeof RamArray[i] == 'number') break
//     types.push(typeof (RamArray[i]))
// }
// console.log(types);

  const RamArray = [
      'Ram',
      'Sharma',
      2024 - 1991,
      'teacher',
      ['rohan', 'mohan', 'sohan'],
    
  ]


// 0,1,...4
// 4,3, ... 0
  
// for (let i = RamArray.length - 1; i >= 0; i--){
//   console.log(i, RamArray[i]);
// }

// 4 = 1 = 4
//     2 = 4
//     3 = 4
//     4 = 4

// for (let exercise = 1; exercise < 4; exercise++){
//   console.log(`------------- Staring exercise ${exercise}`);
  
//   for (let round = 1; round < 6; round++){
//     console.log(`Lifting weight round ${round} `);
//   }
// }

// let round = 1;
// while (round<=10) {
//   console.log(`Lifting weight round ${round}`);
//   round++;
// }

// let dice = 6;
// do {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.floor(Math.random() * 6) + 1; 
//   if(dice === 6) console.log('Loop is about to end');
// } while (dice !== 6)
// console.log(dice);


// let dice = Math.floor(Math.random()*6)+1;
// while (dice !==6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.floor(Math.random() * 6) + 1; 
//   if(dice === 6) console.log('Loop is about to end');
// }
// console.log(dice);