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

// Your tasks:
// 1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow
// 2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// // as well (draw means they have the same average score)
// Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
// Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// Bonus2: Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. 
// Otherwise, no team wins the trophy.

// Test data:

// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106