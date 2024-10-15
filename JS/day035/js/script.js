const fruits = ['apple', 'carrot', 'cherry', 'pineapple', 'pumpkin', 'strawberry']

const box = document.querySelector('.box');
const mes = document.querySelector('.mes');
const score = document.querySelector('.sc');
const second = document.querySelector('.second');
const sec = document.querySelector('audio[data-key="seconds"]');
const select = document.querySelector('audio[data-key="select"]');
const correct = document.querySelector('audio[data-key="correct"]');
const lose = document.querySelector('audio[data-key="lose"]');
const wrong = document.querySelector('audio[data-key="wrong"]');
const yay = document.querySelector('audio[data-key="yay"]');
let tim;
let timer;


fruits.push(...fruits);

