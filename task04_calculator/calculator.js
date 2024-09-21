document.addEventListener('DOMContentLoaded', init)

let currentOperand = ""
let currentOperation = "+"

function init() {
    console.log("DOM loaded")
    addListenersToDigits()
}

function buildNumber(event) {
    const newDigit = event.srcElement.innerHTML
    currentOperand += newDigit
    console.log(currentOperand)
}

function addListenersToDigits() {
    const digitButtons = document.querySelectorAll(".digit")

    digitButtons.forEach((button)=>{
        const buttonValue = button.innerHTML
        button.addEventListener('click', buildNumber)
    })


}