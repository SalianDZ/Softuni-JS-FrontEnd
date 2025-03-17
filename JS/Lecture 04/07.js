function phoneBook(contacts){
    const people = [];
    contacts.forEach(contact => {
        const data = contact.split(':');

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


    people.sort((a, b) => a.name.localeCompare(b.name));

    
    for (const person of people.sort()) {
        console.log(`${person.name} -> ${person.phone}`);
    }
}

phoneBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
   );