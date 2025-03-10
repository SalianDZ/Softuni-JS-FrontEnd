function positiveNumber(number){
    let copyNumber = number;
    let sum = 0;
    

    while(copyNumber > 1){
        copyNumber = Math.round(copyNumber / 2);
        sum += copyNumber;
    }

    if(sum === number && number > 0 && number % 2 === 0){
        console.log('We have a perfect number!');
    }
    else{
        console.log("It's not so perfect.");
    }
}

positiveNumber(28);
