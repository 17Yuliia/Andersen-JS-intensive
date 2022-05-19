class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.header = new Node(null, this.header, this.header);
        this.top = this.header;
        this.bottom = this.header;
    }

    append(elem) {
        const node = new Node(elem, )
    }

    prepend() {

    }

    fing() {

    }

    toArray() {

    }

    static fromIterable() {

    }
}