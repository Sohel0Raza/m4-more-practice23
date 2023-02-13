function checkPrimeNumber(number) {
    if (number === 1) {
        return false;
    }
    else if (number === 2) {
        return true;
    }
    for (let i = 2; i < number; i++){
        if (number % i === 0){
            return false;
        }
    }
    return true;
}
const isPrimeNumber = checkPrimeNumber(9)
console.log(isPrimeNumber)