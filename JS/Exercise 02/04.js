function sortingNumber(input){
    input.sort((a, b) => a - b);
    const newArr = [];
    if(input.length % 2 === 0){
        for (let i = 0; i < input.length - 1; i++) {
            if(i === input.length / 2){
                break;
            }
            newArr.push(input[i]);
            newArr.push(input[input.length - 1 - i])
        }
    }
    else{
        for (let i = 0; i < input.length - 1; i++) {
            if(i === (input.length / 2.0) + 0.5 - 1){
                newArr.push(input[i]);
                break;
            }
            newArr.push(input[i]);
            newArr.push(input[input.length - 1 - i])
        }
    }
    
    return newArr;
}

sortingNumber([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);