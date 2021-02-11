// Coding Challenge #1
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculatetheaverageof3scores
let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

// 2. Usethefunctiontocalculatetheaverageforbothteams
// Data 1
let avrgDolphinsScore = calcAverage(44, 23, 71);
let avrgKoalasScore = calcAverage(65, 54, 49);


    console.log(avrgDolphinsScore, avrgKoalasScore);
// 3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"

let checkWinner = function(avrgDolphinsScore, avrgKoalasScore){
    if (avrgDolphinsScore >= 2 * avrgKoalasScore) {
        console.log(`Dolphins win ${avrgDolphinsScore} vs ${avrgKoalasScore}`);
    } else if (avrgKoalasScore >= avrgDolphinsScore * 2) {
        console.log(`Koalas win ${avrgDolphinsScore} vs ${avrgKoalasScore}`); 
    } else {
        console.log('no team wins');
    }
}

// 4. Usethe'checkWinner'functiontodeterminethewinnerforboth 
// Data1 
checkWinner(avrgDolphinsScore, avrgKoalasScore);
//Data 2
// Data 2
avrgDolphinsScore = calcAverage(85, 54, 41);
avrgKoalasScore = calcAverage(23, 34, 27);
checkWinner(avrgDolphinsScore, avrgKoalasScore);

// 5. Ignoredrawsthistime

// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉

// Coding Challenge #2

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Writeafunction'calcTip'thattakesanybillvalueasaninputandreturns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100


tip = null;
let tipsArr  = [];

let calcTip = function (bill) {
  return (bill >= 50 && bill <= 300) ?  tip = bill * 0.15 : tip = bill * 0.20
    // console.log(`The bill was ${bill}, the tip was ${tip}, and the total value will ${bill + tip}`);
}
console.log("****");
calcTip(100);

// 2. Andnowlet'susearrays!Socreateanarray'bills'containingthetestdata below
let billArr = [125, 555, 44];
// 3. Createanarray'tips'containingthetipvalueforeachbill,calculatedfrom the function you created before
tipsArr = [calcTip(billArr[0]), calcTip(billArr[1]), calcTip(billArr[2])]
console.log("this is a TipsArr", tipsArr);


// 4. Bonus:Createanarray'total'containingthetotalvalues,sothebill+tip Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
console.log("****");
let totalArr = billArr.map(function (num, idx) {
    // console.log("this is num", num);
    // console.log("this is idx", idx);
    return num + tipsArr[idx];
});
console.log("This is total: ", totalArr);


// Coding Challenge #3

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. Foreachofthem,createanobjectwithpropertiesfortheirfullname,mass,and height (Mark Miller and John Smith)

let user1 = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 100,
    height: 1.86,

    calcBMI: function(){
        this.BMI = this.mass / (this.height ** 2);
        // console.log("User 1 BMI:*********** ", this.BMI);
        return this.BMI

    }
}

let user2 = {
    firstName: "John",
    lastName: "Vuk",
    mass: 135,
    height: 2,
    
    calcBMI: function(){
        this.BMI = this.mass / (this.height ** 2);
        // console.log("User 2 BMI:*********** ", this.BMI);
        return this.BMI

    }
}

// 2. Createa'calcBMI'methodoneachobjecttocalculatetheBMI(thesame method on both objects). Store the BMI value to a property, and also return it from the method
console.log("checkpoint 2");
console.log("calling calcBMI() of user2 ---->", user2.calcBMI());
console.log("user2 BMI ---->", user2.BMI);

// 3. LogtotheconsolewhohasthehigherBMI,togetherwiththefullnameandthe respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
console.log("calling calcBMI() of user1 ---->", user1.calcBMI());
console.log("user 1 BMI ---->", user1.BMI);


(user1.BMI > user2.BMI) ? 
    console.log(`${user1.firstName}'s BMI (${user1.BMI}) is higher than ${user2.firstName}'s (${user2.BMI})`) : 
    console.log(`${user2.firstName}'s BMI (${user2.BMI}) is higher than ${user1.firstName}'s (${user1.BMI})`);
// let whoseBMIHigher = (usesr1.BMI > user2.BMI) ? console.log(`${user1.firstName}'s BMI (${user1.BMI}) is higher than ${user2.firstName}'s (${user2.BMI})`);
// console.log("whoseBMIHigher", whoseBMIHigher);

// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.