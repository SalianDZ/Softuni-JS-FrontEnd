function print(input, num){
    let newArr = [];
    for(let i = 0;i<input.length;i+= num){
        newArr.push(input[i]);
    }
    return newArr;
}
