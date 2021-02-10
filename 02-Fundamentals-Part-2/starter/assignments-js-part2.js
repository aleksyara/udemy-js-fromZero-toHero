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
// 2.  To calculate the percentage, divide the given 'population'valueby7900 and then multiply by 100

        let worldPopulation = 7900;

        function percentageOfWorld1 (population){
            let result = (population / worldPopulation) * 100;
            return result;
        }

        console.log(percentageOfWorld1 (1441));


// 3.  Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
// 4.  Create a function expression which does the exact same thing, called 'percentageOfWorld2', 
//     and also call it with 3 country populations (can be the same populations)

let percentageOfWorld2 = function (population){
    return Math.floor((population / worldPopulation) * 100);
}

let percRussia = percentageOfWorld2(145);
let percUSA = percentageOfWorld2(332);
let percChina = percentageOfWorld2(1441);

console.log(percRussia, percUSA, percChina);

// LECTURE: Arrow Functions 35
// 1. Recreate the last assignment, but this timecreateanarrowfunctioncalled
//    'percentageOfWorld3'

let percentageOfWorld3 = (population) => (population / worldPopulation) * 100;

let percUkraine = percentageOfWorld3(60);
console.log(percUkraine);

// LECTURE: Functions Calling Other Functions

// 1. Create a function called 'describePopulation'. Use the function type you like the most. 
// This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'

let describePopulation = function(country, population){
    let worldShare = percentageOfWorld2(population);
    return `${country} has ${population} million people, which is about ${worldShare}% of the world.`
}

// 2. To calculate the percentage,'describePopulation'call the 'percentageOfWorld1' you created earlier
// 3. Call 'describe Population' with data for 3 countries of your choice;

const describeRussia = describePopulation("Russia", 146);

console.log(describeRussia);


// LECTURE 39: Introduction to Arrays
// 1. Createanarraycontaining4populationvaluesof4countriesofyourchoice. You may use the values you have been using previously. Store this array into a variable called 'populations'
// 2. Logtotheconsolewhetherthearrayhas4elementsornot(trueorfalse)
// 3. Createanarraycalled'percentages'containingthepercentagesofthe
// world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values