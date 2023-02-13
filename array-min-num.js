function smallNumber (numbers){
    let number = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i]
        if(element < number){
            number = element;
        }
    }
    return number;
}
const numbers = [729, 839, 916, 723, 536, 738, 927, 536, 928, 561, 8236, 637, 193, 527, 919, 2882]
const num = smallNumber(numbers)
console.log(num)