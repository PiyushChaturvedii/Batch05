// // //Array

// // const friend1 = "Ram";
// // const friend2 = "Shyam";
// // const friend3 = "Mohan";

// // const friends = ["Ram", "Shyam", "Mohan"];
// // // console.log(friends);


// // const birthYear = new Array(2000, 2001, 2002, 2003);

// // console.log(friends[2]);
// // console.log(birthYear[2]);

// // console.log(birthYear.length);
// // console.log(friends[friends.length - 1]);
// // console.log(birthYear[birthYear.length - 1]);

// // friends[1] = "Sita";
// // friends[2] = "Gita";
// // friends[0] = "Sunita";
// // console.log(friends);

// // // friends = ["Sita", "gita"];

// // const firstName = 'Ram';
// // const profile = [firstName, 'Sharma', 2024 - 1996, 'teacher', friends];
// // console.log(profile);
// // console.log(profile.length);


// // const calcAge = function (year) {
// //     return 2024 - year;
// // }
// // const a = 2020;
// // const years = [1990, 1992, 1994, 1996, 2012, 2015, 2017];

// // // console.log(calcAge(years))
// // const age1 = calcAge(years[0]);
// // const age2 = calcAge(years[1]);
// // const age3 = calcAge(years[2]);
// // console.log(calcAge(a))
// // console.log(age1,age2,age3);


// const friends = ['sunit', 'vinita', 'gita', 'sita'];

// //Add elements
// const newLength = friends.push('anita');
// console.log(friends);
// console.log(newLength);


// friends.unshift('babita');
// console.log(friends);

// //Remove elements
// friends.pop(); //Last element
// const removedFriend = friends.pop();
// console.log(friends);
// console.log(removedFriend);


// friends.shift(); //First element
// console.log(friends);

// console.log(friends.indexOf('babita'));

// console.log(friends.indexOf('gita'));

// friends.push(45);
// console.log(friends.includes('sita'));
// console.log(friends.includes('vinita'));
// console.log(friends.includes(45));


// if (friends.includes('sita')) {
//     console.log("Sita is in the list.");
// } else{
//     console.log("Sita is not in the list.");
// }

//OBJECTS

// const RamArray = [
//     'Ram',
//     'Sharma',
//     2024 - 1995,
//     'teacher',
//     ['shyam','mohan','sohan','rohan']
// ]

// console.log(RamArray);

// const Ram = {
//     firstName: 'Ram',
//     lastName: 'Sharma',
//     age: 2024 - 1995,
//     job: 'teacher',
//     friends: ['shyam', 'mohan', 'sohan', 'rohan'],
// }

// console.log(Ram);
// console.log(Ram.firstName);
// console.log(Ram.lastName);
// console.log(Ram.last);

// console.log(Ram['age']);
// console.log(Ram['job']);

const nameKey = 'Name';
// console.log(Ram.'first' + nameKey);
// console.log(Ram['first' + nameKey]); //Ram['firstName']
// console.log(Ram['last' + nameKey]); //Ram['lastName']

const Ram = {
    firstName: 'Ram',
    lastName: 'Sharma',
    age: 2024 - 1995,
    job: 'teacher',
    friends: ['shyam', 'mohan', 'sohan', 'rohan'],  
}

const message = prompt('What do you want to know about Ram? Choose between firstName, lastName, age, job and friends.');

if (Ram[message]) {
    console.log(Ram[message]);
} else {
    console.log('Wrong request!');
    
}

Ram.location = 'Delhi';
Ram['email'] = 'ram@gmail.com';
console.log(Ram);

// console.log(Ram.lastName);
// console.log(Ram[message]);

// console.log(Ram.age);


// "Ram has 4 friends, and his best friend is called mohan."

console.log();
