// principle DRY code  - Don't Repeat Yourself.

// function function1() {
//     console.log('Function 1 is running...');
//     a = 2 + 2;
//     console.log(a);

// }

//calling/invoking/running functions
// function1();
// function1();


// function fruitProcessor(apples,banana,oranges) {
//     // console.log(apples, banana, oranges);
//     const juice = `Juice with apples = ${apples}, banana = ${banana}, oranges = ${oranges}`;
//     return juice;
// }

// fruitProcessor(10, 5, 10);

// const appleJuice = fruitProcessor(20, 0, 0);
// console.log(appleJuice);
// const appleOrangeJuice = console.log(fruitProcessor(5, 0, 20));


// console.log();
// const num = Number('23');


// function calcAge(year) {
//     const age = 2024 - year;
//     return age;
// }


// //Function declaration
// function calcAge1(year) {
//     return 2024 - year;
// }

// const Ram = calcAge1('1991');

// //Function expression
// const calcAge2 = function (year) {
//     return 2024 - year;
// }
// // const calcAge2 = year => 2024 - year;


// const Mohan = calcAge2('1990');

// //Arrow function
// const calcAge3 = year => 2024 - year;

// const Sita = calcAge3('1989');

// console.log(Ram,Mohan,Sita);





// const yearRetirement = (year, firstName) => {
//     const age = 2024 - year;
//     const retire = 70 - age;
//     // return retire;
//     return `${firstName} retire in ${retire} years.`;
// }

// console.log(yearRetirement(1980, 'Shyam'));
// console.log(yearRetirement(1981, 'Sohan'));
// console.log(yearRetirement(1982, 'Rohan'));

// function cutFruit(fruit) {
//     return fruit * 4;
// }


// function fruitProcessor(apples, banana, oranges) {

//     const applePieces = cutFruit(apples);
//     const bananaPieces = cutFruit(banana);
//     const orangePieces = cutFruit(oranges);


//     const juice = `Juice with apples = ${applePieces}, banana = ${bananaPieces}, oranges = ${orangePieces}`;
//     return juice;
// }

// console.log(fruitProcessor(4,4,4));
// console.log(fruitProcessor(4,0,0));


const calcAge = function (year) {
    return 2024 - year;
}

const yearRetirement = function (year, firstName) {
    const age = calcAge(year)
    const retire = 70 - age;
    
    if (retire > 0) {
        console.log(`${firstName} retire in ${retire} years.`);
        return retire
        
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;        
    }
    
    // return `${firstName} retire in ${retire} years.`;
}


console.log(yearRetirement(1996, "Sohan"));
console.log(yearRetirement(1920, "Mohan"));