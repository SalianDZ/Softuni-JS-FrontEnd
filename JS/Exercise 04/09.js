function dictionary(input){
    const dictionary = {};
    for (const json of input) {
        let parsedDict = JSON.parse(json);
    
        for (let key in parsedDict) {
            let value = parsedDict[key];
            
            dictionary[key] = value;
        }
        
    }

    let sortedDictionary = Object.fromEntries(
        Object.entries(dictionary).sort(([keyA], [keyB]) => keyA.localeCompare(keyB)))

    for (const key in sortedDictionary) {
        console.log(`Term: ${key} => Definition: ${sortedDictionary[key]}`);
    }
}

dictionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ']);