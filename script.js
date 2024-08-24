const numberField = document.querySelector(".item")
const clearButton = document.querySelector(".clear")

const debugValueOne = document.querySelector(".valueOne")
const debugValueTwo = document.querySelector(".valueTwo")
const debugOperator = document.querySelector(".operator")

const oneButton = document.querySelector(".one")
const twoButton = document.querySelector(".two")
const threeButton = document.querySelector(".three")
const fourButton = document.querySelector(".four")
const fiveButton = document.querySelector(".five")
const sixButton = document.querySelector(".six")
const sevenButton = document.querySelector(".seven")
const eightButton = document.querySelector(".eight")
const nineButton = document.querySelector(".nine")
const zeroButton = document.querySelector(".zero")

const addButton = document.querySelector(".add")
const subtractButton = document.querySelector(".subtract")
const multiplyButton = document.querySelector(".multiply")
const divideButton = document.querySelector(".divide")
const equalsButton = document.querySelector(".equals")

let valueOne = 0;
let valueTwo = 0;
let operator = '';

clearButton.addEventListener("click", () => {
    numberField.value = ""
    valueOne = 0;
    valueTwo = 0;
    operator = '';
})
oneButton.addEventListener("click", () => {
    numberField.value += "1"
})
twoButton.addEventListener("click", () => {
    numberField.value += "2"
})
threeButton.addEventListener("click", () => {
    numberField.value += "3"
})
fourButton.addEventListener("click", () => {
    numberField.value += "4"
})
fiveButton.addEventListener("click", () => {
    numberField.value += "5"
})
sixButton.addEventListener("click", () => {
    numberField.value += "6"
})
sevenButton.addEventListener("click", () => {
    numberField.value += "7"
})
eightButton.addEventListener("click", () => {
    numberField.value += "8"
})
nineButton.addEventListener("click", () => {
    numberField.value += "9"
})
zeroButton.addEventListener("click", () => {
    numberField.value += "0"
})

addButton.addEventListener("click", () => {
    if(valueOne === 0 && numberField.value != null) {
        valueOne = numberField.value;
        numberField.value = ""
        debugValueOne.textContent = valueOne
    }
    operator = "add";
    debugOperator.textContent = operator
})

subtractButton.addEventListener("click", () => {
    if(valueOne === 0 && numberField.value != null) {
        valueOne = numberField.value;
        numberField.value = ""
        debugValueOne.textContent = valueOne
    }
    operator = "minus";
    debugOperator.textContent = operator
})

multiplyButton.addEventListener("click", () => {
    if(valueOne === 0 && numberField.value != null) {
        valueOne = numberField.value;
        numberField.value = ""
        debugValueOne.textContent = valueOne
    }
    operator = "multiply";
    debugOperator.textContent = operator
})

divideButton.addEventListener("click", () => {
    if(valueOne === 0 && numberField.value != null) {
        valueOne = numberField.value;
        numberField.value = ""
        debugValueOne.textContent = valueOne
    }
    operator = "divide";
    debugOperator.textContent = operator
})

equalsButton.addEventListener("click", () => {
    valueTwo = numberField.value
    valueOne = Number(valueOne)
    valueTwo = Number(valueTwo)

    if(operator === '') {
        console.log("do nothing")
    }
    else if (operator === 'add') {
        numberField.value = valueOne + valueTwo;
    }
    else if(operator === 'subtract') {
        numberField.value = valueOne - valueTwo
    }
    else if(operator === 'multiply') {
        numberField.value = valueOne * valueTwo
    }
    else if(operator === 'divide') {
        numberField.value = valueOne/valueTwo
    }
})
