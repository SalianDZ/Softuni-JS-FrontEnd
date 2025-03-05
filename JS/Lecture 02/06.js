function solve(sentence, searchedWord){
    let words = sentence.split(' ');
    let counter = 0;
    for (const word of words) {
        if (word === searchedWord){
            counter++;
        }
    }
    console.log(counter);
}

solve('This is a word and it also is a sentence','is');