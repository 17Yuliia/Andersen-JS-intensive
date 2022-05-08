// TASK 1
const makeObjectDeepCopy = (obj) => {
    const isObject = typeof obj === 'object';

    if (!isObject || obj === null) {
        return obj;
    }

    const objCopy = new obj.constructor();

    Object.entries(obj).forEach(([key, value]) => {
        objCopy[key] = makeObjectDeepCopy(value);
    });

    return objCopy;
}

const isValidNumber = (number) => {
    return !isNaN(number) && typeof number === 'number';
}

//TASK 2
const selectFromInterval = (arr, from, to) => {
    if (!Array.isArray(arr)) {
        throw new Error('Первый параметр не является массивом!');
    }

    const isValidValues = isValidNumber(from) && isValidNumber(to);

    if (!isValidValues) {
        throw new Error('Индекс должен быть целым числом!');
    }

    const lowerBound = Math.min(from, to);
    const higherBound = Math.max(from, to);

    const filteredArr = arr.filter((number) => {
        if (isValidNumber(number)) {
            throw new Error('Массив должен состоять из чисел!');
        }

        const numberIsInRange = number >= lowerBound && number <= higherBound;

        return numberIsInRange;
    })

    return filteredArr;
}

//TASK3
const myIterable = {
    from: 17,
    to: 22,

    [Symbol.iterator]() {
        const isValidValues = isValidNumber(this.from) && isValidNumber(this.to);
        const fromIsLowerThanTo = this.from <= this.to;

        if (!isValidValues || !fromIsLowerThanTo) {
            throw new Error('Поле должно быть числом!');
        }

        let counter = this.from;

        return {
            next: () => {
                if (counter <= this.to) {
                    return {
                        value: counter++,
                        done: false,
                    }
                }

                return {
                    done: true,
                }
            }
        }
    }
}