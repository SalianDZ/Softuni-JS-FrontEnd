function matchWords(text){
    const regex = /#([a-zA-Z]+)/g;

    const matches = text.match(regex);

    for (const element of matches) {
        let newElement = element.replace('#', '');
        console.log(newElement);
    }
}

matchWords('Nowadays everyone uses # to tag a #special word in #socialMedia');