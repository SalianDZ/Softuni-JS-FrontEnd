function wordTracker(input){
    const foundWords = [];
    const wordsToFind = input[0].split(' ');
    
    for (const wordToFind of wordsToFind) {
        for (let i = 1; i < input.length; i++) {
            if(wordToFind === input[i]){
                if(foundWords.find(w => w.name === wordToFind)){
                    const wr = foundWords.find(w => w.name === wordToFind);
                    wr.counter++;
                }
                else{
                    const newWord = {
                        name: wordToFind,
                        counter:1,
                    };
                    
                    foundWords.push(newWord);
                }
            }
        }
    }

    for (const word of foundWords.sort((a,b) => b.counter - a.counter)) {
        console.log(`${word.name} - ${word.counter}`);
    }
}

wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );