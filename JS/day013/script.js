// //Array

// const friend1 = "Ram";
// const friend2 = "Shyam";
// const friend3 = "Mohan";

// const friends = ["Ram", "Shyam", "Mohan"];
// // console.log(friends);


// const birthYear = new Array(2000, 2001, 2002, 2003);

// console.log(friends[2]);
// console.log(birthYear[2]);

// console.log(birthYear.length);
// console.log(friends[friends.length - 1]);
// console.log(birthYear[birthYear.length - 1]);

// friends[1] = "Sita";
// friends[2] = "Gita";
// friends[0] = "Sunita";
// console.log(friends);

// // friends = ["Sita", "gita"];

// const firstName = 'Ram';
// const profile = [firstName, 'Sharma', 2024 - 1996, 'teacher', friends];
// console.log(profile);
// console.log(profile.length);


const calcAge = function (year) {
    return 2024 - year;
}
const a = 2020;
const years = [1990, 1992, 1994, 1996, 2012, 2015, 2017];

// console.log(calcAge(years))
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
console.log(calcAge(a))
console.log(age1,age2,age3);



