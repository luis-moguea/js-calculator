const displayPreviousValue = document.querySelector("#previous-value");
const displayCurrentValue = document.querySelector("#current-value");
const numbersButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");

const display = new Display(displayPreviousValue, displayCurrentValue);

numbersButton.forEach(element => {
    element.addEventListener("click", () => {
        display.addNumber(element.innerHTML)
    })
});

operatorButton.forEach(element => {
    element.addEventListener("click", () => display.compute(element.value))
});