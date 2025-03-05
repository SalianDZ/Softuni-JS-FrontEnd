function names(input){
    input.sort();
    for (let i = 0; i < input.length; i++) {
        console.log(`${i+1}.${input[i]}`);
    }
}

names(["John", "Bob", "Christina", "Ema", "Salian", "Ile", "Milosh"]);