(num1, num2, num3) => {
    let negativeCount = [num1, num2, num3].filter(num => num < 0).length;
    return negativeCount % 2 === 0 ? "Positive" : "Negative";
}
