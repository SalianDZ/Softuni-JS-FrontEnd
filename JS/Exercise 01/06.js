function print(num){
    const numToString = num.toString();
    let sum = 0;
    for (let index = 0; index < numToString.length; index++) {
       sum += Number(numToString[index]);
    }

    console.log(sum)
}

print(245678)