"use strict";

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "End...";

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
document.querySelector('.score').textContent = score;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    document.querySelector(".message").textContent = "🚀🚀🚀 Correct Number !!!";
    console.log(guess, typeof guess);
    

    if (!guess) {
        document.querySelector(".message").textContent =
            "🚨🚨🚨 No number";
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent =
            "🚀🚀🚀 Correct Number !!!";
    } else if (guess > secretNumber) {
        if (score > 1) {
        document.querySelector(".message").textContent =
        "📈📈📈 Too high !!!";
        score--;
        document.querySelector('.score').textContent = score;
    } else {
            document.querySelector(".message").textContent =
                "🥁🥁🥁 You lost the game!";     
    }
    } else if (guess < secretNumber) {
        if (score > 1) {
          document.querySelector(".message").textContent =
          "📉📉📉 Too low !!!";
          score--;
          document.querySelector(".score").textContent = score;
        } else {
          document.querySelector(".message").textContent =
            "🥁🥁🥁 You lost the game!";
        }
  }
});
