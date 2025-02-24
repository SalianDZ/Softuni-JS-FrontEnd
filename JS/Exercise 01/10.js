function print(num){
    const numToString = num.toString();
    let currentChar = '';
    let areSame = false;
    let error = false;
    let sum = 0;
    for (let index = 0; index < numToString.length; index++) {
        if (index !== 0) {
            if(numToString[index] === currentChar)
            {
                areSame = true;
                sum += Number(numToString[index]);
                currentChar = numToString[index]
            }
            else{
                error = true;
                sum += Number(numToString[index]);
            }
        }
        else
        {
            currentChar = numToString[0];
            sum += Number(numToString[0]);
        }
        
    }

    console.log(!error);
    console.log(sum)
    
}

print(1234);