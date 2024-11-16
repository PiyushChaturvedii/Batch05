'use strict';

const days = ['mon','tue','wed','thu','fri','sat','sun'];

const hours = {
    [days[3]]: {
        open: 12,
        close: 22,
    },
    [days[4]]: {
        open: 11,
        close: 23,
    },
    [days[5]]: {
        open: 0,    //Open 24 Hours
        close: 24,
    },
};

const restaurant = {
    name: 'Italiano Restro',
    location: 'M G Road, Jaipur, Rajasthan, India',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Garlic Bread', 'Creamy Toast', 'Green Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Thali'],
    // ES6 enhanced object literals
    
    order(starterIndex,mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },hours,
    // orderPizza(mainIngredient, ...otherIngredients){
    //     console.log(mainIngredient);
    //     console.log(otherIngredients);
    // }
};


const question = new Map ([
    ['question','What is the best programming language in the world?'],
    [1,'C'],
    [2,'Java'],
    [3,'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!']
])
// console.log(question);


//Convert object to map
// console.log(Object.entries(hours));
const hoursMap = new Map(Object.entries(hours));
// console.log(hoursMap);


//Quiz app
// console.log(question.get('question'));
// for(const [key,value] of question){
//     if(typeof key==='number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));


//Covert map to array
console.log([...question]);

// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);













///////////////////////////////////////////////////
// MAPS : Fundamantel
// const rest = new Map();
// rest.set('name','Ram Sharma');
// rest.set(1,'Jaipur, Rajasthan');

// console.log(rest.set(2,'Rajasthan, India'));

// rest.set('categories',['Italian','Vegetarian','Organic'])
// .set('open',11)
// .set('close',23)
// .set(true, 'We are open :D')
// .set(false, 'We are closed :(');

// console.log(rest);

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time>rest.get('open') && time<rest.get('close')));

// console.log(rest.has('open'));
// rest.delete(2);
// // rest.clear();
// const arr = [1,2];
// rest.set(arr,'Test');
// rest.set(document.querySelector('h1'),'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));






/////////////////////////////////////////////
//Sets
// // A set can never have any duplicates.

// const orderSet = new Set(['Pasta','Pizza','Thali','Thali','Thali','Pizza','Thali','Pizza'])


// // console.log(new Set('Raam'));

// // console.log(orderSet.size);
// // console.log(orderSet.has('Pizza'));
// // console.log(orderSet.has('Tea'));
// // orderSet.add('Tea');
// // orderSet.add('Tea');
// // orderSet.delete('Thali');
// // orderSet.clear();
// // console.log(orderSet);

// for (const order of orderSet) console.log(order);

// //Example
// const staff = ['Chef','Manger','Cashier','Waiter','Manger','Cashier','Chef','Manger'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set('Raam').size);











// // Property NAMES
// const properties = Object.keys(hours);
// // console.log(properties);

// let openStr = `We are open on ${properties.length} days. `;
// for (const day of properties){
//     openStr += `${day},`;
// }
// // console.log(openStr);

// // Property VALUES
// const values = Object.values(hours);
// // console.log(values);


// //Entire object
// const entries = Object.entries(hours);
// // console.log(entries);

// //[key,value]
// for (const [key,{open,close}] of entries){
//     console.log(`On ${key} we open at ${open} and close at ${close}`);
// }



// // //with Optional Chaining
// // if(restaurant.hours.mon) console.log(restaurant.hours.mon.open);

// // if(restaurant.hours.sat) console.log(restaurant.hours.sat.open);


// console.log(restaurant.hours?.sat?.open);
// console.log(restaurant.hours?.mon?.open);

// const days = ['mon','tue','wed','thu','fri','sat','sun'];

// //Example
// for ( const day of days){
//     const open = restaurant.hours[day]?.open ?? 'closed';
//     console.log(`On ${day}, we open at ${open}`);
// }

// //Methods
// console.log(restaurant.order?.(0,1)??'Method does not exist')
// console.log(restaurant.orderrestro?.(0,1)??'Method does not exist')

// //Arrays
// const users = [
//     {
//         name: 'ram', email: 'hello@ram.io'
//     },
//     {
//         email: 'hello@shyam.io'
//     }
// ]

// console.log(users[0]?.name  ?? 'User array empty');
// console.log(users[1]?.name  ?? 'User array empty');

// if(users.length>0) console.log(user[0].name);
// else console.log('user array empty');



// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log(menu);

// for (const item of menu) console.log(item);

// // for (const item of menu.entries()){
// //     console.log(`${item[0] + 1}: ${item[1]}`);
// // }

// for (const [i,el] of menu.entries()){
//     console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);




// const rest1 = {
//     name: 'Restro 1',
//     numGuests: 0
// };

// const rest2 = {
//     name: 'Restro 2',
//     owner: 'Ram Sharma'
// }


// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';


// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';


// console.log(rest1);
// console.log(rest2);



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



