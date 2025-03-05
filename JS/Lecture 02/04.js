function substringWord(word, firstIndex, count){
    let newWord = '';

    if (count >= word.length) {
        for (let i = firstIndex; i <= word.length - 1; i++) {
            newWord += word[i];
        }
    }
    else{
        for (let i = firstIndex; i <= firstIndex + count - 1; i++) {
            newWord += word[i];
        }
    }
    
    console.log(newWord);
}

substringWord('ExampleWord', 7, 2);