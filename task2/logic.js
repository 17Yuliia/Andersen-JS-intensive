const calculateResult = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber;
    const quotient = firstNumber / secondNumber;

    return {sum, quotient};
}

const main = () => {
    const firstNumber = getData('Введите первое число');
    const isValidFirstNumber = validateNumber(firstNumber);

    if (!isValidFirstNumber) {
        console.log('Неверный ввод!');

        return;
    }

    const secondNumber = getData('Введите второе число');
    const isValidSecondNumber = validateNumber(secondNumber);

    if (!isValidSecondNumber || Number(secondNumber) === 0) {
        console.log('Неверный ввод!');

        return;
    }

    const { sum, quotient } = calculateResult(+firstNumber, +secondNumber);
    console.log(`Ответ: ${sum}, ${quotient}.`);
}

main();