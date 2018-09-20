/*----- constants -----*/

const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;
const FIVE = 5;
const SIX = 6;
const SEVEN = 7;
const EIGHT = 8;
const NINE = 9;

/*----- app's state (variables) -----*/

var selectedNum;
var runningTotal;

/*----- cached element references -----*/

var sum = 0; // ADD FUNCTION that if numbers are larger than 13, do something
var total = document.getElementById("total");
var clear = document.getElementById("AC");
var calcContainer = document.querySelector("main");
total.innerHTML = `<p>${sum}</p>`;

/*----- event listeners -----*/

calcContainer.addEventListener("click", function(event) {
    console.log(event.target.id);
});

/*----- functions -----*/

function add (selectedNum, runningTotal) {
    runningTotal = runningTotal + selectedNum;
    return runningTotal;
}

function subtract (selectedNum, runningTotal) {
    runningTotal = runningTotal - selectedNum;
    return runningTotal;
}

function divide () {
    runningTotal = runningTotal / selectedNum;
    return runningTotal;
}

function multiply () {
    runningTotal = runningTotal * selectedNum;
    return runningTotal;
}