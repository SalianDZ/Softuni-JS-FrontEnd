function cooking(numberAsString, op1, op2, op3, op4, op5){
    let number = Number(numberAsString);
    let operatations = [op1, op2, op3, op4, op5]

    operatations.forEach(operation => {
        if (operation === 'chop') {
            number = number / 2
            console.log(number);
        }
        else if (operation === 'dice') {
            number = Math.sqrt(number);
            console.log(number);
        }
        else if (operation === 'spice') {
            number += 1
            console.log(number);
        }
        else if(operation === 'bake'){
            number *= 3
            console.log(number);
        }
        else if (operation === 'fillet'){
            number = number - (number * 0.2)
            console.log(number);
        }
    });
}

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');