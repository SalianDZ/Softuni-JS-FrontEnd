function piccolo(input){
    const dictionary = {};

    for (const command of input) {
        const data = command.split(', ');
        
        if(data[0] === 'IN'){
            dictionary[data[1]] = 'in';
        }
        else{
            dictionary[data[1]] = 'out';
        }
    }

    let keys = Object.keys(dictionary).filter(key => dictionary[key] === "in").sort();

    if(keys.length === 0){
        console.log("Parking Lot is Empty")
    }
    else{
        for (const key of keys) {
            console.log(key);
        }
    }
    
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
    );