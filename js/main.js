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
            setCurrNumAndRunningTotal(ZERO);
            break;
        case "one":
            setCurrNumAndRunningTotal(ONE);
            break;
        case "two":
            setCurrNumAndRunningTotal(TWO);
            break;
        case "three":
            setCurrNumAndRunningTotal(THREE);
            break;
        case "four":
            setCurrNumAndRunningTotal(FOUR);
            break;
        case "five":
            setCurrNumAndRunningTotal(FIVE);
            break;
        case "six":
            setCurrNumAndRunningTotal(SIX);
            break;
        case "seven":
            setCurrNumAndRunningTotal(SEVEN);
            break;
        case "eight":
            setCurrNumAndRunningTotal(EIGHT);
            break;
        case "nine":
            setCurrNumAndRunningTotal(NINE);
            break;
        case "divide":
            setNumberToCalcAndOperand(DIVIDE);
            currentNumberSelection = "";
            break;
        case "multiply":
            setNumberToCalcAndOperand(MULTIPLY);
            currentNumberSelection = "";
            break;
        case "add":
            setNumberToCalcAndOperand(ADD);
            currentNumberSelection = "";
            break;
        case "subtract":
            setNumberToCalcAndOperand(SUBTRACT);
            currentNumberSelection = "";
            break;
    }
    displayTotal();
})

allClear.addEventListener("click", clearCalculator);
backArrow.addEventListener("click", removeNumberFromView);
totalButton.addEventListener("click", calculate);

/*----- functions -----*/

function setNumberToCalcAndOperand(OPERAND) {
    numbersToCalculate.push(currentNumberSelection);
    numbersToCalculate.push(OPERAND);
}

function setCurrNumAndRunningTotal(NUM) {
    currentNumberSelection += NUM;
    runningTotal = currentNumberSelection;
}

function calculate() {
    if (numbersToCalculate.length > 0) {
        numbersToCalculate.push(currentNumberSelection);
        runningTotal = eval(numbersToCalculate.join(""));
    } else {
        getTotal();
    }
}

function removeNumberFromView() {
    currentNumberSelection = currentNumberSelection.substring(0, currentNumberSelection.length - 1);
    runningTotal = currentNumberSelection;
}

function clearCalculator() {
    runningTotal = "0";
    currentNumberSelection = "";
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