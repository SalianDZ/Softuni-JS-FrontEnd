function print(input){
    input.forEach(number => {
        const numberAsString = number.toString();
        const reversedSNumber = numberAsString.split('').reverse().join('');
        if(numberAsString === reversedSNumber){
            console.log(true)
        }
        else{
            console.log(false);
        }
    });
}

print([32, 2, 232, 1010]);