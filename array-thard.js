const numbers = [729, 839, 916, 723, 536, 738, 927, 536, 4, 928, 561, 8236, 193, 527, 919, 2882, 2, 1, 3]
console.log('numbers :', numbers);
let smallest = numbers[0]
let secondSmallest = numbers[0]
let Smallest = numbers[0]
for (let i = 0; i < numbers.length; i++) {
    // console.log('numbers[i] :', numbers[i]);
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }

    if (numbers[i] > smallest && numbers[i] < secondSmallest) {
        secondSmallest = numbers[i];
    }


    if ((numbers[i] > smallest) && (numbers[i] > secondSmallest) && (numbers[i] < Smallest)) {
        Smallest = numbers[i];
        console.log('numbers[i] :', numbers[i]);
    }
}

console.log(smallest)
console.log(secondSmallest)
console.log(Smallest)