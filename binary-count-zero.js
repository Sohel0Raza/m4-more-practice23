function countZero(binaryNumber) {
    let zero = [];
    for (let i = 0; i < binaryNumber.length; i++) {
        const element = binaryNumber[i]
        if (element == 0) {
            zero.push(element)
        }
    }
    const totalZero =zero.length;
    return totalZero;
}
let binaryNumber = '1001100101';
const totalZeros = countZero(binaryNumber)
console.log(totalZeros)