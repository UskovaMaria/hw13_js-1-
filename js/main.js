const doc = document;
const btn1 = doc.querySelector('.bt1');
const btn2 = doc.querySelector('.bt2');
const box = doc.querySelector('.box');

const colors = ['red', 'green', 'blue', 'yellow'];

let index = 0;
let index2 = 3;

nextColor();

btn1.onclick = function() {
    nextColor() ; 
}       

btn2.onclick = function() {
    reverseColor() ; 
}  

function nextColor() {
    box.style.background = colors[index];
    index ++;
    if (index >= colors.length) {
        index = 0;
    }
}

function reverseColor() {
    box.style.background = colors[index2];
    index2 --;
    if (index2 < 0) {
        index2 = 3;
    }
}
