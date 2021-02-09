'use strict';

// LECTURE: Functions

// Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. 
// Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'

// 2. Call this function 3times, with input data for 3 different countries.
// Storethe returned values in 3 different variables, and log them to the console

let describeCountry = function(country, population, capitalCitty){
    console.log(`${country} has ${population} million people and its capital city is ${capitalCitty}.`);
}

describeCountry("Russia", "146", "Moscow");