function claculateInterest (principal, rate, year){
    const interest = principal *(rate / 100) * year;
    return interest;
}
let principal = 1000;
let rate = 5;
let year = 1;
const interestTotal = claculateInterest(principal, rate, year)
console.log('Interest Total: ', interestTotal)
