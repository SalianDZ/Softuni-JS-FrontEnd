function print(char1, char2){
    const char1Num = char1.charCodeAt(0);
    const char2Num = char2.charCodeAt(0);
    const chars = [];
    for (let i =  Math.min(char1Num, char2Num) + 1; i < Math.max(char1Num, char2Num); i++) {
        chars.push(String.fromCharCode(i));
    }
    console.log(chars.join(' '))
}

print('C', '#');