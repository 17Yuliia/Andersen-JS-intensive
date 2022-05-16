class Controller { 
    constructor() {
        this.view = new View();
        this.model = new Model();
    }
  
    init() {
        this.view.init();

        this.view.addListenerForElement(this.view.sign, this.signButtonHandler);
        this.view.addListenerForElement(this.view.equal, this.equalButtonHandler);
        this.view.addListenerForElement(this.view.cancel, this.cancelButtonHandler);
        this.view.addListenerForElement(this.view.backspace, this.backspaceButtonHandler);

        this.view.addListenerForElements(this.view.numbers, this.numberButtonsHandler);
        this.view.addListenerForElements(this.view.operations, this.operationButtonsHandler);
    }

    signButtonHandler = () => {
        if (this.model.currentValue === '') {
            return;
        }

        this.model.currentValue *= -1;
        this.updateView();
    }

    equalButtonHandler = () => {
        if (this.model.currentValue === '' || this.model.previousValue === '') {
            return;
        }

        this.compute();
        this.updateView();
    }

    cancelButtonHandler = () => {
        this.clearAll();
        this.updateView();
    }

    backspaceButtonHandler = () => {
        this.model.currentValue = this.model.currentValue.slice(0, -1);
        this.updateView();
    }

    numberButtonsHandler = (element) =>  {
        const number = this.view.getInnerText(element);

        this.addNumber(number);
        this.updateView();
    }

    operationButtonsHandler = (element) => {
        const operation = this.view.getInnerText(element);

        this.chooseOperation(operation);
        this.updateView();
    }

    addNumber(number) {
        if (number === '.' && this.model.currentValue.includes('.')) {
            return;
        }

        this.model.currentValue = `${this.model.currentValue}${number}`;
    }

    chooseOperation(operation) {
        if (this.model.currentValue === '' && this.model.previousValue === '') {
            return;
        }

        if (this.model.currentValue === '') {
            this.model.operation = operation;
            return;
        }

        if (this.model.previousValue !== '') {
            this.compute();
        }

        this.model.operation = operation;
        this.model.previousValue = this.model.currentValue;
        this.model.currentValue = '';
    }

    compute() {
        let result;
        const current = +this.model.currentValue;
        const previous = +this.model.previousValue;
        const calculator = new Calculator(previous, current);

        switch (this.model.operation) {
            case '+': {
                result = calculator.sum();
                break;
            }
            case '−': {
                result = calculator.sub();
                break;
            }
            case '×': {
                result = calculator.mul();
                break;
            }
            case '÷': {
                result = calculator.div();
                break;
            }
            default:
                return;
        }

        this.model.currentValue = result.toString();
        this.model.previousValue = '';
        this.model.operation = '';
    }

    updateView() {
        const input = this.model.currentValue;
        const history = `${this.model.previousValue} ${this.model.operation}`;
        
        this.view.setInnerText(this.view.input, input);
        this.view.setInnerText(this.view.history, history);
    }

    clearAll() {
        this.model.currentValue = '';
        this.model.previousValue = '';
        this.model.operation = '';
    }
}