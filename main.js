Array.prototype.myFilter = function(callback, array = this) {
    const filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        const isFiltered = callback(array[i], i, array);

        if (isFiltered) {
            filteredArray.push(array[i]);
        }
    }

    return filteredArray;
}

function createDebounceFunction(callback, timeout) {
    let timeoutId;

    return (...args) => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => callback(...args), timeout);
    }
}