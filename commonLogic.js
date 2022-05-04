const getData = (message) => {
    return prompt(message); 
}

const validateNumber = (input) => {
    const number = Number(input);

    return Number.isFinite(number) && input !== '';
}
