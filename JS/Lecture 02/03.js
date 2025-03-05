function difference(input){
    let evenSum = 0;
    let oddSum = 0;
    input.forEach(element => {
        if(element % 2 === 0){
            evenSum+=element;
        }
        else{
            oddSum+=element 
        }
    });
    console.log(evenSum-oddSum);
}

difference([1,2,3,4,5,6]);