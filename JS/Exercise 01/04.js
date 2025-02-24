function printAndSum(number1, number2) {
    let sum = 0;
    let resultString = "";

    for (let i = number1; i <= number2; i++) {
        sum += i;
        if (i === number1) {
            resultString += i;
        } else {
            resultString += " " + i;
        }
    }

    console.log(resultString);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
