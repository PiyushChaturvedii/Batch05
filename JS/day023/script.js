//Remember, we're gonna use strict mode in  all scripts now!
'use strict';

//PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is that: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperature = [3, -1, -1, 4, 6, 5, 'error', 3, -3, 7, 8];

// 1) Understanding the problem
    //  - What is temp amplitude? Answer: difference between highest and lowest temp
    // - How to compute max and min temp?
    // - What's a sensor error? And what to do ?

// 2) Breaking up into sub-problems

// - How to ignore errors?
// -Find max value in temp array?
// -Find min value in temp array?
// -Subtract min from max(amplitude) AND return it.

// const calcTempAmplitude = function (temps) {
//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== 'number') continue;


//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };


// const amplitude = calcTempAmplitude([4, 'error', 8, 4, 6, 8, 9]);
// console.log(amplitude);

// PROBLEM 2
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
//  - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

//  2) Breaking up into sub-problems
// -How to merge 2 arrays?

// const calcTempAmplitude = function (t1, t2) {
//     const temps = t1.concat(t2)
//     console.log(temps);
    
//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== 'number') continue;


//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };


// const amplitude = calcTempAmplitude([4,8,9],[4,5,6]);
// console.log(amplitude);

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
// C) FIX
        value: Number(prompt('Degrees celsius'))
    }
    
    // console.log(measurement);
    // B) FIND
    // debugger;
    console.table(measurement);
    

    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);
    
        
    
    const kelvin = measurement.value + 273;
    return kelvin;
}
// A) IDENTIFY
console.log(measureKelvin());
