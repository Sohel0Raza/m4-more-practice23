function numberAverage (numbers){
    let sum = 0 ;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element; 
    }
    const numLength = numbers.length
    const totalSum = sum / numLength; 
    return totalSum;
}

const numbers = [729, 839, 916, 723, 536, 738, 927, 536, 928, 561, 8236, 637, 193, 527, 919, 2882]
const average = numberAverage(numbers)
console.log(average)