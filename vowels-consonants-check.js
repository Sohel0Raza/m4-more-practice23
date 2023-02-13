function vowelsConsonantsCheck(latter){
    const vowel =['a', 'e', 'i', 'o', 'u']
    for(let i = 0; i < vowel.length; i++){
        const element = vowel [i]
        if(latter == element){
            return'VOWEL';
        }
    }
    return 'CONSONANT0';
}
const latter = vowelsConsonantsCheck('k');
console.log(latter)