function rotation(input, number){
    for(let i = 0; i < number;i++){
       input.push(input.shift()); 
    }
    console.log(input.join(' '));
}

rotation([51, 47, 32, 61, 21], 2);