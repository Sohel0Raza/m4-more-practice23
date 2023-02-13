function feetToInch (feet){
    const inch = (feet * 12).toFixed(2)
    return parseFloat(inch);
}
const myFeet = 5;
const totalInch = feetToInch(myFeet)
console.log(totalInch)