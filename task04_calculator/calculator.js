document.addEventListener('DOMContentLoaded', init)
const calculator = document.querySelector(".calculator")

let currentResult = 0
let currentOperand = ""
let currentOperation = "+"

function init() {
    console.log("DOM loaded")
    addListenersToDigits()
    addLIstenersToOperationButtons()
}

function updateResult() {
    switch(currentOperation) {
        case "+": 
        currentResult += Number.parseInt(currentOperand); break;
        case "-":
            currentResult -= Number.parseInt(currentOperand); break;
        case "*":
            currentResult *= Number.parseInt(currentOperand); break;
        case "/":
            currentResult /= Number.parseInt(currentOperand); break;
    }
}

function buildNumber(event) {
    const newDigit = event.srcElement.innerHTML
    currentOperand += newDigit
    console.log(`Building number - current operand: ${currentOperand}`)
}

function addListenersToDigits() {
    const digitButtons = calculator.querySelectorAll(".digit")

    digitButtons.forEach((button)=>{
        const buttonValue = button.innerHTML
        button.addEventListener('click', buildNumber)
    })
}

function resetCurrentOperand() {
    currentOperand = ""
}

function updateCurrentOperation(newOperation) {
    console.log(`curr op before: ${currentOperation}`)
    currentOperation = newOperation
    console.log(`curr op after: ${currentOperation}`)
}

function operationClicked(event) {
    const nextOperation = event.srcElement.innerHTML
    if(currentOperand.length > 0) {
        updateResult()
        resetCurrentOperand()
    }
    console.log(`Current result: ${currentResult}`)
    updateCurrentOperation(nextOperation)
}

function addLIstenersToOperationButtons() {
    const operationButtons = calculator.querySelectorAll(".operation")
    console.log(operationButtons)
    operationButtons.forEach((button)=>{
        button.addEventListener('click', operationClicked)
    })
}