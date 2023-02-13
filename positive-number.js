function checkPositiveNumber (numbers){
    let numberArray = [];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i]
        if(element >= 0){
            numberArray.push(element)
        }
        else{
            break;
        }
    }
    return numberArray;
}
let numbers = [18, 92, 74, 29, 64, -80, 58, 30, 45, 80, -6, 928, 53, 10, 379, 379,]
const positiveNumberArray = checkPositiveNumber(numbers)
console.log(positiveNumberArray)