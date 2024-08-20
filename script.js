const numberField = document.querySelector(".item")
const clearButton = document.querySelector(".clear")

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

clearButton.addEventListener("click", () => {
    numberField.value = ""
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