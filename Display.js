class Display {
    constructor (displayPreviousValue, displayCurrentValue){
        this.displayCurrentValue = displayCurrentValue;
        this.displayPreviousValue = displayPreviousValue;
        this.calculator = new Calculator();
        this.operationType = undefined;
        this.currentValue = "";
        this.previousValue = "";
        this.symbols = {
            add: "+",
            substract: "-",
            split: "/",
            multiply: "*"
        }
    }

    erase(){
        this.currentValue = this.currentValue.toString().slice(0,-1)
        this.printValues()
    }

    eraseAll(){
        this.currentValue = ""
        this.previousValue = ""
        this.operationType = undefined
        this.printValues()
    }

    addNumber(number){
        if(number === "." && this.currentValue.includes(".")) return
        this.currentValue = this.currentValue.toString() + number.toString();
        this.printValues();
    }

    compute(type){
        this.operationType !== "equal" && this.calculate();
        this.operationType = type;
        this.previousValue = this.currentValue || this.previousValue;
        this.currentValue = "";
        this.printValues();
    }

    printValues(){
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.symbols[this.operationType] || ""}`;
    }

    calculate(){
        const previousValue = parseInt(this.previousValue);
        const currentValue = parseInt(this.currentValue);

        if(isNaN(currentValue) || isNaN(previousValue))return 
        this.currentValue = this.calculator[this.operationType](previousValue, currentValue);
        
    }
}