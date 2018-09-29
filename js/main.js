/*----- constants -----*/

const ZERO = "0";
const ONE = "1";
const TWO = "2";
const THREE = "3";
const FOUR = "4";
const FIVE = "5";
const SIX = "6";
const SEVEN = "7";
const EIGHT = "8";
const NINE = "9";
const DIVIDE = "/";
const MULTIPLY = "*";
const ADD = "+";
const SUBTRACT = "-";

/*----- app's state (variables) -----*/

var runningTotal;
var finalTotal;
var numbersToCalculate;
var currentNumberSelection;

/*----- cached element references -----*/

var totalDisplay = document.getElementById("total");
var totalText = document.getElementById("total-text");
var allClear = document.getElementById("ac");
var setSign = document.getElementById("set-sign");
var backArrow = document.getElementById("back-arrow");
var divideButton = document.getElementById("divide");
var multiplyButton = document.getElementById("multiply");
var subtractButton = document.getElementById("subtract");
var addButton = document.getElementById("add");
var totalButton = document.getElementById("equal");
var calculatorBody = document.getElementsByTagName("main")[0];

/*----- event listeners -----*/

calculatorBody.addEventListener("click", function(event) {
    switch(event.target.id) {
        case "zero":
            currentNumberSelection += ZERO;
            runningTotal = currentNumberSelection;
            break;
        case "one":
            currentNumberSelection += ONE;
            runningTotal = currentNumberSelection;
    }
    displayTotal();
})

allClear.addEventListener("click", clearCalculator);
backArrow.addEventListener("click", removeNumberFromView);
totalButton.addEventListener("click", calculate);

/*----- functions -----*/

function calculate() {
    eval(numbersToCalculate.join(""));
}

function removeNumberFromView() {
    currentNumberSelection = currentNumberSelection.substring(0, currentNumberSelection.length - 1);
    runningTotal = currentNumberSelection;
}

function clearCalculator() {
    console.log("clearing...");
    runningTotal = "0";
    currentNumberSelection = "0";
    numbersToCalculate = [];
}

function getTotal() {
    return runningTotal;
}

function displayTotal() {
    getTotal();
    totalText.textContent = runningTotal;
}

function render() {
    clearCalculator();
    displayTotal();
}

render();