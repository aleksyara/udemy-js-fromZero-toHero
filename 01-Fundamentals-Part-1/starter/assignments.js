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


// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. StoreMark's and John's mass and height in variables
let massMark =  78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

// 2. Calculate both their BMI susing the formula (you can even implement both
// versions)

let bmiMark = massMark / heightMark ** 2
console.log("this is bmiMark", bmiMark);

let bmiJohn = massJohn / heightJohn ** 2
console.log("this is bmiJohn", bmiJohn);


// 3. Createa Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

let markHigherBMI = (bmiMark > bmiJohn);
console.log(markHigherBMI);