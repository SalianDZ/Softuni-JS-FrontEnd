function reverse(num, input){
    const array = [];
    for (let index = 0; index < num; index++) {
        array.unshift(input[index]);
    }
    console.log(array.join(' '));
}

reverse(3, [10, 20, 30, 40, 50])