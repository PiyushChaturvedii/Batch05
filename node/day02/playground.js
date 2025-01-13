// // var name = 'Ram';
// // var age = 30;
// // var hasHobbies = true;

// // function summarizeUser(userName, userAge, userHasHobby){
// //     return(
// //         'Name is ' + userName +
// //         ', age is ' + userAge +
// //         ' and the user has hobbies: ' + userHasHobby
// //     )
// // }

// // console.log(summarizeUser(name,age,hasHobbies));


// const person = {
//     name: 'Ram',
//     age: 30,

//     hello() {
//         console.log('Hi, I am ' + this.name);
//     }
// };

// // console.log(person);
// const hobbies = ['Cooking','Codeing','Sports'];
// // for ( let hobby of hobbies){
// //     console.log(hobby);
// // }
// // console.log(hobbies.map(hobby=>'Hobby: '+ hobby));

// // hobbies.push('Programming');
// // console.log(hobbies);
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) =>{
//     return [arg1,arg2,arg3];
// }
// console.log(toArray(1,2,3,4,5,6));


// const person = {
//     name: 'Ram',
//     age: 30,
//     hello() {
//             console.log('Hi, I am ' + this.name);
//         }
// };

// const printName = ({name}) =>{
//     console.log(name);
// }

// printName(person);

// const {name, age} = person;
// console.log(name, age);

// const hobbies = ['Cooking','Programming'];
// const [hobby1,hobby2] = hobbies;
// console.log(hobby1,hobby2);

// const fetchData = callback =>{
//     setTimeout(()=>{
//         callback('');
//     },1500);
// }

const fetchData = () =>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('done!');
        },1500)
    })
}


setTimeout(()=>{
console.log('Timer is done !!!');
fetchData()
.then(text=>{
    console.log(text);
    return fetchData();
})
},2000)

console.log('Hello World!');