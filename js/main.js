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

var runningTotal;
var numbersToCalculate;

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
    console.log(event.target);
})

/*----- functions -----*/

function render() {
    totalText.textContent = 0;
    runningTotal = 0;
    numbersToCalculate = [];
}

render();