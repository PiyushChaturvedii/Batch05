// principle DRY code  - Don't Repeat Yourself.

// function function1() {
//     console.log('Function 1 is running...');
//     a = 2 + 2;
//     console.log(a);
    
// }

//calling/invoking/running functions
// function1();
// function1();


function fruitProcessor(apples,banana,oranges) {
    // console.log(apples, banana, oranges);
    const juice = `Juice with apples = ${apples}, banana = ${banana}, oranges = ${oranges}`;
    return juice;
}

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


//Function declaration
function calcAge1(year) {
    return 2024 - year;
}

const Ram = calcAge1('1991');

//Function expression
const calcAge2 = function (year) {
    return 2024 - year;
}

const Mohan = calcAge2('1990');


console.log(Ram,Mohan);