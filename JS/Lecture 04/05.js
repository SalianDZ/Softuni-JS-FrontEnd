function phoneBook(contacts){
    const people = [];
    contacts.forEach(contact => {
        const data = contact.split(' ');

        if(people.find(p => p.name === data[0])){
             const foundPerson = people.find(p => p.name === data[0])
             foundPerson.phone = data[1];
        }
        else{
            const person = {
                name: data[0],
                phone: data[1],
            };
            people.push(person);
        }
    });

    for (const person of people) {
        console.log(`${person.name} -> ${person.phone}`);
    }
}