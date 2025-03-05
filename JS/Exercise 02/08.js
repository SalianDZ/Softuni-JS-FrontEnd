function splitPascalCase(word) {
    const words = word.match(/[A-Z][a-z]*/g);
    console.log(words.join(', '));
}

splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');