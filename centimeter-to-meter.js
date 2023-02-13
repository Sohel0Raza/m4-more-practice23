function centimeterToMeter (centimeter){
    const meter = centimeter / 100;
    return meter;
}
const herMeter = 1000;
const totalMeter = centimeterToMeter(herMeter)
console.log('Meter: ', totalMeter)