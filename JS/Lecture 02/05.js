function replace(text, word){
    let censored = text.replaceAll(word, repeat(word));
    console.log(censored);

    function repeat(word){
        let subs = '';
        for (let i = 0; i < word.length; i++) {
            subs += '*'
        }
        return subs;
    }
}
replace('Find the hidden word', 'hidden');