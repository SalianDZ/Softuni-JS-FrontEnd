function oddOccurrences(input){
    words = input.split(' ');
    const foundWords = [];

    for (const word of words) {
        if(foundWords.find(w => w.name === word.toLowerCase())){
            const currentWord = foundWords.find(w => w.name === word.toLowerCase());
            currentWord.counter++;
        }
        else{
            const newWord = {
                name: word.toLowerCase(),
                counter : 1
            };
            
            foundWords.push(newWord);
        }
    }

    let result = '';
    for (const foundWord of foundWords.filter(w => w.counter % 2 === 1)) {
        result += foundWord.name + ' ';
    }
    console.log(result.trimEnd());
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');