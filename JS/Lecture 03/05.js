(num1, num2, operator) => {
    switch (operator) {
        case 'multiply':
            console.log(num1 * num2);
            break;
        case 'divide':
            console.log(num2 !== 0 ? num1 / num2 : 'Cannot divide by zero');
            break;
        case 'add':
            console.log( num1 + num2);
            break;
        case 'subtract':
            console.log(num1 - num2);
            break;
    }
};