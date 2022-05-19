const { nullLiteralTypeAnnotation } = require("@babel/types");

function isValidSize(value) {
    const valueIsInteger = Number.isInteger(value);
    const valueIsPositive = value > 0;

    if (!valueIsInteger || !valueIsPositive) {
        throw new Error(`${value} is not a positive integer or type is not a number!`);
    }

    return true;
}

class Node {
    constructor(value, previous) {
        this.value = value;
        this.previous = previous;
    }
}

class Stack {
    constructor(maxSize = 10) {
        if (isValidSize(maxSize)) {
            this.top = null;
            this.size = 0;
            this.maxSize = maxSize;
        }
    }

    push(elem) {
        if (this.size === this.maxSize) {
            throw new Error('Stack is full!');
        }

        const node = new Node(elem, this.top);

        this.top = node;
        this.size++;
    }

    pop() {
        if (this.size === 0) {
            throw new Error('Stack is empty!');
        }

        const temp = this.top;

        this.top = this.top.previous;
        this.size--;

        return temp.value;
    }

    peek() {
        return this.top?.value || null;
    }

    isEmpty() {
        return this.size === 0;
    }

    toArray() {
        const arr = [];
        let current = this.top;

        for (let i = 0; i < this.size; i++) {
            arr.push(current.value);
            current = current.previous;
        }

        return arr;
    }

    static fromIterable(iterable) {
        const isIterable = typeof iterable[Symbol.iterator] === 'function';

        if (!isIterable) {
            throw new Error(`${iterable} is not iterable!`);
        }
        
        const stack = new Stack(iterable.length);
        
        for (const element of iterable) {
            stack.push(element);
        }

        return stack;
    }
}