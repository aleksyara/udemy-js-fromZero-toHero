// 1. Declarevariablescalled'country','continent'and'population'and assign their values according to your own country (population in millions)
// 2. Logtheirvaluestotheconsole

let country = "USA";
const continent = "North America";
let population = 330000000;

console.log(country, continent, population + " mln people");

// LECTURE: Data Types
// 1. Declare a variable called'isIsland'and set its value according to your country. 
//The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
// 2. Log thetypesof'isIsland','population','country'and'language' to the console.

let isIsland = "false";
let language;
console.log(isIsland, population, country, language);

// LECTURE: let, const and var
// 1. Set the valueof'language'to the language spoken where you live(some countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now,and observe whathappens

language = "English";

// LECTURE: Basic Operators
// .If your country split in half,and each half would contain half the population, 
//  then how many people would live in each half?
let halfPopulation = population / 2;
console.log("This is halfPopulation", halfPopulation);

// .Increase the population of your country by 1 and log the result to the console
population = population + 1;
console.log(population);
// .Finland has a population of 6 million. Does your country have more people than Finland?
let populationInFinland = 6000000;
let comparePopulation = (population > populationInFinland);
console.log("Compare Poulation. Does my population more than in Finland?", comparePopulation);

// .The average population of a country is 33 million people. Doesyourcountry
// have less people than the average country?

let averagePopulation = 33000000;
let comparePopulation2 = (population > averagePopulation);
console.log("Compare Poulation. Does my average population more than in your country?", comparePopulation2);
let description = 'Portugal is in Europe, and its 11 million people speak portuguese';


// LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, thistime using the template literal syntax
description = `${country} is in ${continent}, 
and its ${population} people speak ${language}`;
console.log(description);

// LECTURE: Taking Decisions: if / else Statements

if(population > averagePopulation){
console.log(`${country}'s populations is above on ${population - averagePopulation} than verage on average popultion.`)
} else {
    console.log(`${country}'s populations is below than average`);
}

//type coercion;
console.log('23' + '13' + 10); //Output 231310, because "+". It converts number 10 to String. Only with +
console.log('23' - '13' - 1); // Output will be 9  because "-". It converts number 1 to String.
console.log('23' > '10'); // output true. JS automaticly converts value due to compare operator
console.log('23' * '10'); // output 230. JS automaticly converts value due to compare operator


// LECTURE: Type Conversion and Coercion
'9' - '5'; //4
'19' - '13' + '17'; //617
'19' - '13' + 17; // 23
'123' < 57; // false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

// LECTURE: Equality Operators: == vs. ===

// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// console.log("This is numNeighbours ", numNeighbours);

// if (numNeighbours === 1) {
//     console.log("Only 1 border");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// } else if (numNeighbours == 0) {
//     console.log("No borders");
// }

// LECTURE: The switch Statement

let language2 = 'mandarin';

switch (language2) {
    case 'chinese' :
    case 'mandarin' : 
        console.log('MOST number of native speakers!');
    break;
    case 'spanish' : 
        console.log('2nd place in number of native speakers');
    break;
    case 'english' : 
        console.log('3rd place');
    break;
    case 'hindi' :
        console.log('Number 4');
    break;
    case 'arabic' :
        console.log('5th most spoken language');
    break;
    default:
        console.log('Great language too :D');
} 