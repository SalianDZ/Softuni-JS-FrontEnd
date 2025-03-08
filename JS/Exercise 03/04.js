function print(number) {
    // Handle negative numbers if necessary
    number = Math.abs(number);

    let evenSum = 0;
    let oddSum = 0;

    while (number > 0) {
        const digit = number % 10;
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
        number = Math.floor(number / 10);
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

print(1000435);