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

/*----- app's state (variables) -----*/

var selectedNum;
var runningTotal = 0;

/*----- cached element references -----*/

var sum = 0; // ADD FUNCTION that if numbers are larger than 13, do something
var total = document.getElementById("total");
var clear = document.getElementById("AC");
var calcContainer = document.querySelector("main");
total.innerHTML = `<p>${sum}</p>`;

/*----- event listeners -----*/

calcContainer.addEventListener("click", function(event) {
    var self = event.target;
    switch (self.id) {
        case "zero":
            setSelectedNum(ZERO);
            break;
        case "one":
            setSelectedNum(ONE);
            break;
        case "two":
            setSelectedNum(TWO);
            break;
        case "three":
            setSelectedNum(THREE);
            break;
        case "four":
            setSelectedNum(FOUR);
            break;
        case "five":
            setSelectedNum(FIVE);
            break;
        case "six":
            setSelectedNum(SIX);
            break;
        case "seven":
            setSelectedNum(SEVEN);
            break;
        case "eight":
            setSelectedNum(EIGHT);
            break;
        case "nine":
            setSelectedNum(NINE);
        case "AC":
            resetCalc();
            break;
        case "equal":
            return runningTotal;
        case "add":
            calculate(runningTotal, selectedNum, add);
            break;
        case "subtract":
            break;
        case "multiply":
            break;
        case "divide":
            break;
    }
});

/*----- functions -----*/

function add (num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num1 + num2;
}

function subtract (num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num1 - num2;
}

function divide (num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num1 / num2;
}

function multiply (num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num1 * num2;
}

function calculate(num1, num2, cb) {
    return cb(num1, num2);
}

console.log(calculate("5", "5", add));

function setSelectedNum (currentNum) {
    if (selectedNum !== undefined || selectedNum > 0) {
        selectedNum = selectedNum + currentNum;
    } else {
        selectedNum = currentNum;
    }
    sum = selectedNum;
    total.innerHTML = `<p>${sum}</p>`;
}

function resetCalc () {
    runningTotal = 0;
    selectedNum = 0;
    sum = 0;
    total.innerHTML = `<p>${sum}</p>`;
}