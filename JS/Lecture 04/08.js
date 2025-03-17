function catsFuntion(inputs){
    class Cat{
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    
        meow() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }

    const cats = [];
    inputs.forEach(input => {
        const data = input.split(' ');

        const name = data[0];
        const age = data[1];

        const cat = new Cat(name, age);
        cats.push(cat);
    });

    for (const cat of cats) {
        let answer = cat.meow();
        console.log(answer);
    }
}

catsFuntion(['Mellow 2', 'Tom 5']);