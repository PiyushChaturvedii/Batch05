// "use strict";

                function calcAge(birthYear) {
                const age = 2024 - birthYear;

                                function printAge() {
                                var output = `${firstName}, You are ${age}, born in ${birthYear}`;
                                    // console.log(output);

                                    if (birthYear >= 1981 && birthYear <= 1996) {
                                        var millennial = true;
                                        // Creating New variable with same name as outer scope's variable
                                        
                                        const firstName = 'mohan';
                                        const str = `Oh, and you're a millennial, ${firstName}`
                                        console.log(str);
                                    }
                                    
                                    function add(a, b) {
                                        return a + b;
                                    }
// reassign outer scope's variable
// console.log(str);
add(2, 3);
console.log(millennial);
}
output = 'New Output';
console.log(output);
                    
                printAge();

                return age;
                }

const firstName = "Ram";
calcAge(1991);

// console.log(age);
// console.log(output);

// printAge();