document.addEventListener('DOMContentLoaded', init)
const calculator = document.querySelector(".calculator")

let currentResult = 0
let currentOperand = ""
let currentOperation = "+"

function init() {
    console.log("DOM loaded")
    addListenersToDigits()
    addLIstenersToOperationButtons()
    addLIstenerToResultButton()
    addListenerToClearButton()
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
    currentOperation = newOperation
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

function showResult() {
    updateResult()
    resetCurrentOperand()
    updateCurrentOperation("+")
    console.log(`Current result: ${currentResult}`)

}

function addLIstenerToResultButton() {
    const resultButton = calculator.querySelector(".result")
    resultButton.addEventListener('click', showResult)
}

function resetCalculator() {
    resetCurrentOperand()
    updateCurrentOperation("+")
    currentResult = 0
    console.log("Calculator reset")
}

function addListenerToClearButton() {
    const clearButton = calculator.querySelector(".clear")
    clearButton.addEventListener('click', resetCalculator)
}