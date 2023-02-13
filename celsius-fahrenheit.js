function celsiusToFahrenheit(celsius){
    const fahrenheit = (celsius * 9 ) / 5 + 32;
    return fahrenheit;

}
const myCelsius = 2;
const fahrenheitIs = celsiusToFahrenheit(myCelsius)
console.log('Fahrenheit: ', fahrenheitIs)