"use strict";

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "End...";

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector(".message").textContent = message;
// }

// document.querySelector('.score').textContent = score;
// // document.querySelector(".number").textContent = secretNumber;

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   // document.querySelector(".message").textContent = "🚀🚀🚀 Correct Number !!!";
//   displayMessage("🚀🚀🚀 Correct Number !!!");
//   console.log(guess, typeof guess);
  
//   // When there is no input
//   if (!guess) {
//     // document.querySelector(".message").textContent =
//     // "🚨🚨🚨 No number";
//     displayMessage('🚨🚨🚨 No number');
    
//     //When player wins
//   } else if (guess === secretNumber) {
//     // document.querySelector(".message").textContent =
//     // "🚀🚀🚀 Correct Number !!!";
//     displayMessage('🚀🚀🚀 Correct Number !!!');
//     document.querySelector(".number").textContent = secretNumber;
//     document.querySelector("body").style.backgroundColor = "#4ab92f";
//     document.querySelector('.number').style.width = '30rem'
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   }else if (guess !=== secretNumber) {
//             if (score > 1) {
//     // document.querySelector(".message").textContent =
//     // guess > secretNumber ? "📈📈📈 Too high !!!" : "📉📉📉 Too low !!!" ;
//               displayMessage(guess > secretNumber ? "📈📈📈 Too high !!!" : "📉📉📉 Too low !!!");
//       score--;
//       document.querySelector('.score').textContent = score;
//   } else {
//     // document.querySelector(".message").textContent =
//     //     "🥁🥁🥁 You lost the game!";
//               displayMessage("🥁🥁🥁 You lost the game!");
//   }
// }
// })
    
//   //When guess is too low
//   //   } else if (guess < secretNumber) {
//   //       if (score > 1) {
//   //         document.querySelector(".message").textContent =
//   //         "📉📉📉 Too low !!!";
//   //         score--;
//   //         document.querySelector(".score").textContent = score;
//   //       } else {
//   //         document.querySelector(".message").textContent =
//   //           "🥁🥁🥁 You lost the game!";
//   //       }
  

// //coding Challenge #1

// /*
// Implement a game rest functionality, so that the player can make a new guess! Here is how:

// 1. Select the element with the 'again' class and attach a click event handler.
// 2. In the handler function, restore initial values of the score and secretNumber variables.
// 3. Restore the initial conditions of the message, number, score and guess input field
// 4. Also restore the original background color (#333) and number width (15rem).


// */

// document.querySelector('.again').addEventListener('click', function () {
  
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;

//   // document.querySelector(".message").textContent = "Start guessing...";
//   displayMessage("Start guessing...");
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".number").textContent = '?';
//   document.querySelector(".guess").value = '';
//    document.querySelector("body").style.backgroundColor = "#333";
//     document.querySelector('.number').style.width = '15rem'
// })


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
}

const displayScore = function (message) {
  document.querySelector('.score').textContent = message;
}


displayScore(score);


document.querySelector(".check").addEventListener("click", function () {
                        const guess = Number(document.querySelector(".guess").value);

                        displayMessage("🚀🚀🚀 Correct Number !!!");
                        console.log(guess, typeof guess);
                        

                        if (!guess) {
                          displayMessage('🚨🚨🚨 No number');
                        }
                        else if (guess === secretNumber) {
                                    displayMessage('🚀🚀🚀 Correct Number !!!');
                                    document.querySelector(".number").textContent = secretNumber;
                                    document.querySelector("body").style.backgroundColor = "#4ab92f";
                          document.querySelector('.number').style.width = '30rem';
                          if (score > highscore) {
                            highscore = score;
                            document.querySelector('.highscore').textContent = highscore;
                          }
  }
  else if (guess !=== secretNumber) {
                                  if (score > 1) {
                                    displayMessage(guess > secretNumber ? "📈📈📈 Too high !!!" : "📉📉📉 Too low !!!");
                                    score--;
                                    displayScore(score);
                                  } else {
                                    displayMessage("🥁🥁🥁 You lost the game!");
                                  }
                      }
});

document.querySelector('.again').addEventListener('click', function () {
  
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

  displayMessage("Start guessing...");
  displayScore(score);
  document.querySelector(".number").textContent = '?';
  document.querySelector(".guess").value = '';
   document.querySelector("body").style.backgroundColor = "#333";
    document.querySelector('.number').style.width = '15rem'
})