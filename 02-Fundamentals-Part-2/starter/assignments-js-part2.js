'use strict';

// LECTURE: Functions

// Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. 
// Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'

let describeCountry = function(country, population, capitalCitty){
   let result = `${country} has ${population} million people and its capital city is ${capitalCitty}.`;
   return result;
}

// 2. Call this function 3times, with input data for 3 different countries.
// Storethe returned values in 3 different variables, and log them to the console

const aboutRussia = describeCountry("Russia", 146, "Moscow");
const aboutUkraine = describeCountry("Ukraine", 50, "Kiev");
const aboutMexico = describeCountry("Mexico", 60, "Mexico City");

console.log("This is about Russia: ", aboutRussia);
console.log("This is about Ukraine: ", aboutUkraine);
console.log("This is about Mexico: ", aboutMexico);


// LECTURE: Function Declarations vs. Expressions

// 1.  The world populationis 7900 million people. Create a function declaration called 'percentageOfWorld1' 
//     which receives a 'population' value, and returns the percentage of the world population that the given population represents. 
//     For example, China has 1441 million people, so it's about 18.2% of the world population
        

// 2.  Tocal culatethepercentage,dividethegiven'population'valueby7900 and then multiply by 100
// 3.  Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
// 4.  Create a function expression which does the exact same thing, called 'percentageOfWorld2', 
//     and also call it with 3 country populations (can be the same populations)
