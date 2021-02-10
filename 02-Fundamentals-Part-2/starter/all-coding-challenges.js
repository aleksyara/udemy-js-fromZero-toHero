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
// let avrgDolphinsScore = calcAverage(44, 23, 71);
// let avrgKoalasScore = calcAverage(65, 54, 49);
// Data 2
let avrgDolphinsScore = calcAverage(85, 54, 41);
let avrgKoalasScore = calcAverage(23, 34, 27);

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

// 5. Ignoredrawsthistime

// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉

