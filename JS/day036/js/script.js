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
let tim, timer;


fruits.push(...fruits);

function shuffle(arr) {
    let val1 = arr.length, temp, index;
    while (val1 > 0) {
        index = Math.floor(Math.random() * val1);
        val1--;
        temp = arr[val1];
        arr[val1] = arr[index];
        arr[index] = temp;
    }
    return arr;

}

window.onload = init;

function init() {
    let divs = shuffle((fruits));
    for (let x = 0; x < divs.length; x++){
        box.innerHTML += `
        <div class='placer ${x}'>
            <div class='holder ${divs[x]}'>
            <div class='front'></div>
            <img class='back' src='libs/img/${divs[x]}.png'>
            </div>
        </div>
        `
    } 
    showBox();
}

function showBox() {
    mes.addEventListener('click', ready);
}

function ready() {
    let a = box.children;
    this.innerHTML = 'Ready!';
    tim = new Date().getTime() + 30000
    console.log(tim);
    timer = setInterval(setDate, 1000)
    for (let x = 0; x < a.length; x++){
        a[x].addEventListener('click', click);
    }
}

let selectedImg = []

function click() {
    let b = this.firstElementChild;
    let c = this.firstElementChild.firstElementChild.nextElementSibling
    c.style.zIndex = 15
    b.classList.add('flip');
    evaluator(this,c)
}

let selectedBox = [];
function evaluator(a,c) {
    select.play()
    if (a.classList[1] === undefined) {
    return

    }    
    selectedBox.push(a);
    selectedImg.push(c)

    if (selectedBox.length === 1) {
        mes.innerHTML = 'Be sure!';
    }

    if (selectedBox.length === 2) {
        if (selectedBox[0].firstElementChild.classList[1] == selectedBox[1].firstElementChild.classList[1]) {
            selectedBox=[];
            selectedImg=[];
        } else {
            hidePic(selectedBox);
            selectedBox = [];
        }
    }


}