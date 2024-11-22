const india = {
    airline: 'AirIndia',
    iataCode: 'AI',
    bookings: [],
    // book: function() {}
    book(flightNum, name){
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({flight: `${this.iataCode}${flightNum}`,name})
    },
};

india.book(125, 'Ram Sharma');
india.book(234,'Mohan Lal');
india.book(322,'Sita Devi');
// console.log(india);

const srilanka = {
    airline: 'SriAir',
    iataCode: 'SA',
    bookings: [],

};

const book = india.book;
// does NOT work
// book(23,'mohit');

// const book:(flightNum:any,name:any)=>void

// Call method
book.call(srilanka, 23, 'mohit');
console.log(srilanka);

book.call(srilanka, 30, 'rohit');
console.log(srilanka);

const dubai ={
    airline: 'dubaiAirways',
    iataCode: 'DA',
    bookings:[],
}

book.call(dubai, 98, 'Rohit');
book.call(dubai, 80, 'Sunita');
console.log(dubai);

//Apply method
const flightData = [235, 'Ram Sharma'];
book.apply(dubai,flightData);
console.log(dubai);


book.call(dubai,...flightData)



