function jsonConverter(firstName, lastName, hairColor){
    const person = {
        name: firstName,
        lastName,
        hairColor,
    };
    return JSON.stringify(person);
}