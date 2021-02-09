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

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice out puttotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 

if(bmiMark > bmiJohn) {
    console.log(`Mark's BMI is higher than John's!`);
    console.log(`Mark's ${bmiMark} is higher than John's ${bmiJohn}.😎`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
}

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. 
// The winner with the highest average score wins a trophy!

// Test data:

// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
//Data 1
// let averageDolphinsScore = (96 + 108 + 89) / 3;
// let averageKoalasScore = (88 + 91 + 110) / 3;

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// if(averageDolphinsScore > averageKoalasScore) {
//     console.log("Dolphin wins");
//  } else if (averageKoalasScore > averageDolphinsScore) {
//    console.log('Koala wins')
//  } else {
//      console.log("It's a draw");
//  }

// Bonus1: Include a requirement for a minimum score of 100. 
// With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
// Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
//Data Bonus 1
let averageDolphinsScore = (7 + 112 + 101) / 3;
let averageKoalasScore = (19 + 95 + 123) / 3;
let minimumScore = 100;


if(averageDolphinsScore > averageKoalasScore && averageDolphinsScore >= minimumScore) {
    console.log("Dolphin wins");
} else if (averageKoalasScore > averageDolphinsScore && averageKoalasScore >= minimumScore) {
    console.log('Koala wins')
} else if (averageKoalasScore === averageDolphinsScore && averageDolphinsScore >= minimumScore && averageKoalasScore >=minimumScore) {
    console.log("It's a draw");
} else {
    console.log("No one wins");
}
    

// Bonus2: Minimum score also applies to adraw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. 
// Otherwise, no team wins the trophy.

// Coding Challenge #4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. 
// In his country, it's usual to tip 15% if the bill value is between 50 and 300. 
// If the value is different, the tip is 20%.

// Task 1 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. 
// It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
let bill = 275;
let tip = null;

// if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15
// } else {
//     tip = bill * 0.20
// }
(bill >= 50 && bill <= 300) ?  tip = bill * 0.15 : tip = bill * 0.20
console.log("This is a Tip", tip);

// Task 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). 
// Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value will ${bill + tip}`);

// Test data:
// § Data 1: Test for bill values 275, 40 and 430 

// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 
// § Value X is between 50 and 300, if it's>= 50 && <= 300😉