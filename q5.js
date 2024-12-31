const tempConv = {
    toFahrenheit: (temp) => {
        return 'Fahrenheit temp: ' +((temp * 9/5) + 32);
    },

    toCelsius: (temp) => {
        return 'Celsius temp:' +((temp-32) * 5/9);
    }
}

console.log(tempConv.toFahrenheit(38));
console.log(tempConv.toCelsius(100.4));                                