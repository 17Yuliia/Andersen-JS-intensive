const validateBase = (input) => {
    const number = Number(input);
    const isInRange = number > 1 && number < 37;
    
    return Number.isInteger(number) && input !== '' && isInRange;
}

const validateParams = (number, base) => {
    const isValidNumber = validateNumber(number);
    const isValidBase = validateBase(base);

    return isValidNumber && isValidBase;
}

const convertValue = (value, scale) => {
    return value.toString(scale);
}

const main = () => {
    const numberInput = getData('Введите число');
    const baseInput = getData('Введите систему счисления');

    const isValidParams = validateParams(numberInput, baseInput);

    if(isValidParams) {
        console.log(convertValue(+numberInput, +baseInput));
    } else {
        console.log('Неверный ввод!');
    }
}

main();
