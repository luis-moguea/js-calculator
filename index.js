const displayPreviousValue = document.querySelector("#previous-value");
const displayCurrentValue = document.querySelector("#current-value");
const numbersButton = document.querySelector(".number");
const OperatorButton = document.querySelector(".operator");

const display = new Display(displayPreviousValue, displayCurrentValue);

numbersButton.forEach(element => {
    element.addEventListener("Click", () => {
        display.addNumber(element.innerHTML)
    })
});

OperatorButton.forEach(operator => {
    operator.addEventListener("Click", () => {
        display.addNumber(operator.innerHTML)
    })
})
