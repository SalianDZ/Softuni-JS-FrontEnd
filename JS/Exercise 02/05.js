function revealWords(words, sentence){
    let wordsArr = words.split(', ')

    for (const word of wordsArr) {
        let placeholder = '*'.repeat(word.length);
        sentence = sentence.replace(placeholder, word);
    }

    console.log(sentence);
}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');