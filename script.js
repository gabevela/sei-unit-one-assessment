let counter = 0;

const inputElement = document.getElementById("input");
const displayElement = document.getElementById("display");
const addElement = document.getElementById("plus-button");
const minusElement = document.getElementById("minus-button");

addElement.addEventListener('click' , addition);
minusElement.addEventListener('click' , subtraction);

function addition() {
    counter = counter + parseInt(inputElement.value);
    displayElement.innerText = counter;
    if (counter < 0) {
        displayElement.style.color = "red";
    } else {
        displayElement.style.color = "black"
    }
}

function subtraction() {
    counter = counter - parseInt(inputElement.value);
    displayElement.innerText = counter;
    if (counter < 0) {
        displayElement.style.color = "red";
    } else {
        displayElement.style.color = "black"
    }
}



