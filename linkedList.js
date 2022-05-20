class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.header = new Node(null);
        this.header.prev = this.header;
        this.header.next = this.header;
    }

    append(elem) {
        const node = new Node(elem, this.header.prev, this.header);

        node.prev.next = node;
        node.next.prev = node;
    }

    prepend(elem) {
        const node = new Node(elem, this.header, this.header.next);

        node.prev.next = node;
        node.next.prev = node;
    }

    find(elem) {
        let current = this.header.next;

        while (current !== this.header) {
            if (current.value === elem) {
                return current;
            }

            current = current.next;
        }

        return null;
    }

    toArray() {
        const arr = [];
        let current = this.header.next;

        while (current !== this.header) {
            arr.push(current.value);
            current = current.next;
        }

        return arr;
    }

    static fromIterable(iterable) {
        const isIterable = typeof iterable[Symbol.iterator] === 'function';

        if (!isIterable) {
            throw new Error(`${iterable} is not iterable!`);
        }
        
        const linkedList = new LinkedList();
        
        for (const element of iterable) {
            linkedList.append(element);
        }

        return linkedList;
    }
}