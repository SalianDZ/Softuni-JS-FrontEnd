function converter(input){
    const person = JSON.parse(input);
    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}