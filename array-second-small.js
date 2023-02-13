const numbers = [729, 839, 916, 723, 536, 738, 927, 536, 928, 561, 8236, 637, 193, 527, 919, 2882]
let smallest = numbers[0]
let secondSmallest = numbers[0]
for (let i = 0; i < numbers.length; i++){
    if (numbers [i] < smallest){
        smallest = numbers[i]
    }
}

console.log('smallest :', smallest);
for (let i = 0; i < numbers.length; i++){
    if (numbers [i] > smallest && numbers[i] < secondSmallest  ){
        secondSmallest = numbers[i]
    }
}
console.log('secondSmallest :', secondSmallest);



// console.log(secondSmallest)