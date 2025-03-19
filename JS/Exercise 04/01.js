function employees(names){
    class Person{
        constructor(name){
            this.name = name;
            this.personalNumber = name.length;
        }

        printInfo(){
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
        }
    }

    names.forEach(name => {
        const person = new Person(name);
        person.printInfo();
    });
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );