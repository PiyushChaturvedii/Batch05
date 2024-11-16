// 'use strict';

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
    },
    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
}


const rest1 = {
    name: 'Restro 1',
    numGuests: 0
};

const rest2 = {
    name: 'Restro 2',
    owner: 'Ram Sharma'
}


// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';


rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';


console.log(rest1);
console.log(rest2);



//Use ANY data type, return ANY data type,
//short-circuiting

// console.log(3 || 'Ram');
// console.log('' || 'Ram');
// console.log(true || 0);
// console.log(undefined || null);


// console.log(undefined || 0  || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;

//Nullish: null and undefined (NOT 0 or '')
// const guests1 = restaurant.numGuests ?? 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 20;
// console.log(guests2);

// // --AND--

// console.log('hello' && 0);
// console.log(0 && 'hello');
// console.log('hello' && 20 && null && 'Ram');



// if(restaurant.orderPizza){
//     restaurant.orderPizza('mushrooms', 'tomatoes');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'tomatoes');



