function reverseMaker(word){
    const reverse = word.split('').reverse().join('')
    return reverse;
}
const wordReverse = reverseMaker('himu')
console.log(wordReverse)