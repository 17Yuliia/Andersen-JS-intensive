const isValidNumber = (value) => {
    if (typeof value !== 'number') {
        throw new Error('Not a number!');
    }

    if (isNaN(value) || Number.isFinite()) {
        throw new Error('Wrong number!');
    }

    return true;
}

class Calculator {
    constructor(x, y) {
        if (arguments.length !== 2) {
            throw new Error('Constructor needs two arguments!');
        }

        if (isValidNumber(x) && isValidNumber(y)) {
            this.x = x;
            this.y = y;
        }
    }

    sum = () => {
        return this.x + this.y;
    };

    mul = () => {
        return this.x * this.y;
    };

    sub = () => {
        return this.x - this.y;
    };

    div = () => {
        if (this.y === 0) {
            throw new Error('Dividing by zero!');
        }

        return this.x / this.y;
    };
}