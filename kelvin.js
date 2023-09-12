//Create a Kelvin variable that will stay constant

const kelvin = '0';

//Creating a celsius variable by subtracting 273 from kelvin

var celsius = (kelvin - 273);

//Creating a fahrenheit variable with the formula celsius*(9/5) + 32

var fahrenheit = (celsius * (9/5) + 32);

//Creating variable to round the fahrenheit calculation

var roundFar = (Math.round (fahrenheit));

//Using the .floor method to round down the Farenheit temperature and save result as farenheit variable

var fahrenheit = (Math.floor (celsius * (9/5) + 32));

// console.log('The forecast for today in Kelvin is:' + kelvin);

// console.log('The temperature in Celsius is: ' + celsius);

// console.log('The temperature in Fahrenheit is: ' + fahrenheit);

// console.log('The temperature in rounded Fahrenheit is: ' + roundFar);

var TEMPERATURE = fahrenheit;

console.log('The temperature is ' + TEMPERATURE + ' degrees Fahrenheit.');

//Code to convert Celsius to Newton temperature

var Newton = (Math.floor (celsius * (33/100)));

var NEWTEMP = Newton;

console.log('The temperature is ' + NEWTEMP + ' degrees Newton.');
