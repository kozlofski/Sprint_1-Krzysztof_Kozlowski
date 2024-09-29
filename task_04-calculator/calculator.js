document.addEventListener('DOMContentLoaded', init)
const calculator = document.querySelector(".calculator")
const resultWindow = calculator.querySelector(".result-window")
const operationButtons = calculator.querySelectorAll(".operation")

let currentResult = 0
let currentOperand = ""
let currentOperation = "init"

function init() {
    addListenersToDigits()
    addLIstenersToOperationButtons()
    addLIstenerToResultButton()
    addListenerToClearButton()
}

function updateResult() {
    switch(currentOperation) {
        case "init": 
        currentResult = Number.parseFloat(currentOperand); break;
        case "+":
        currentResult += Number.parseFloat(currentOperand); break;
        case "-":
            currentResult -= Number.parseFloat(currentOperand); break;
        case "*":
            currentResult *= Number.parseFloat(currentOperand); break;
        case "/":
            currentResult /= Number.parseFloat(currentOperand); break;
    }
}

function buildNumber(event) {
    const newDigit = event.srcElement.innerHTML
    currentOperand += newDigit
    renderResultWindow(currentOperand)
}

function addListenersToDigits() {
    const digitButtons = calculator.querySelectorAll(".digit")
    const commaButton = calculator.querySelector(".comma")

    digitButtons.forEach((button)=>{
        const buttonValue = button.innerHTML
        button.addEventListener('click', buildNumber)
    })
    commaButton.addEventListener('click', buildNumber)
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
        renderResultWindow(currentResult)
    }
    updateCurrentOperation(nextOperation)
    resetHighlightingOperationButtons()
    renderHighlightCurrentOperationButton(event.srcElement)
}

function addLIstenersToOperationButtons() {
    operationButtons.forEach((button)=>{
        button.addEventListener('click', operationClicked)
    })
}

function showResult() {
    if(currentOperation !== "init" && currentOperand > 0) {
        updateResult()
        resetCurrentOperand()
        updateCurrentOperation("init")
        renderResultWindow(currentResult)
    }
    resetHighlightingOperationButtons()
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
    renderResultWindow(currentResult)
    resetHighlightingOperationButtons()
}

function addListenerToClearButton() {
    const clearButton = calculator.querySelector(".clear")
    clearButton.addEventListener('click', resetCalculator)
}

function renderResultWindow(number) {
    resultWindow.innerHTML = number
}

function renderHighlightCurrentOperationButton(clickedButton) {
    clickedButton.style.backgroundColor = '#fa76dd';
}

function resetHighlightingOperationButtons() {
    operationButtons.forEach((button)=>{
        button.style.backgroundColor = '#fad9f3';
    })
}