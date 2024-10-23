'use strict';

const restaurant = {
    name: 'Italiano Restro',
    location: 'M G Road, Jaipur, Rajasthan, India',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Garlic Bread', 'Creamy Toast', 'Green Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Thali'],
    order: function (starterIndex,mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 10,
            close: 24,
        },
    }
}


// a = 2;
// a = [2, 3, 4, 5];
// a = { a: 34, b: 34 };

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(arr);

console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);


// const [first, second] = restaurant.categories;
// console.log(first, second);

let [first, , second] = restaurant.categories;
console.log(first, second);


// let temp = first;
// first = second;
// second = temp;
// console.log(first, second);

[first, second] = [second, first];
console.log(first,second);



// console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructing
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j,k]] = nested;
console.log(i,j,k);


//Default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p,q,r);

