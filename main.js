const isString = (value) => {
    return typeof value === 'string';
}

const concatStrings = (value, separator) => {    
    const validSeparator = isString(separator) ? separator : '';
    
    const concat = (next) => {
        if (!isString(next) || !isString(value)) {
            return value;
        }
        
        const result = `${value}${validSeparator}${next}`;
        return concatStrings(result, validSeparator);
    }
    
    return concat;
}

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

    setX = ((x) => {
        if (isValidNumber(x)) {
            this.x = x;
        }
    }).bind(this);

    setY = ((y) => {
        if (isValidNumber(y)) {
            this.y = y;
        }
    }).bind(this);

    logSum = (() => {
        console.log(this.x + this.y);
    }).bind(this);

    logMul = (() => {
        console.log(this.x * this.y);
    }).bind(this);

    logSub = (() => {
        console.log(this.x - this.y);
    }).bind(this);

    logDiv = (() => {
        if (this.y === 0) {
            throw new Error('Dividing by zero!');
        }

        console.log(this.x / this.y);
    }).bind(this);
}