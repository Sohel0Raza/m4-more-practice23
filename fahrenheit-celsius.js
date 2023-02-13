function fahrenheitToCelsius (fahrenheit){
    const celsiusFormula = (fahrenheit - 32 ) * (5 / 9);
    const celsiusTow = celsiusFormula.toFixed(2);
    const celsius = parseFloat(celsiusTow)
    return celsius;
}
const herFahrenheit = 1;
const celsiusIs = fahrenheitToCelsius(herFahrenheit)
console.log('celsius: ', celsiusIs)