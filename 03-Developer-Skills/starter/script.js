// Remember, we're gonna use strict mode in all scripts now!
'use strict';


// Developer Skills & Editor Setup
// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Createafunction'printForecast'whichtakesinanarray'arr'andlogsa string like the above to the console. Try it with both test datasets.
// 2. Usetheproblem-solvingframework:Understandtheproblemandbreakitup into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data2:[12,5,-5,0,4]
// GOOD LUCK 😀

// let weatherFrcstArr = [17, 21, 23];
// console.log('check point 2');
// console.log("*******", arr[i]); 
//    console.log('check point 1');
let weatherFrcstArr = [12,5,-5,0,4];
console.log(weatherFrcstArr.join());

let printForecast = function(arr){
   let str = '...';
   for (let i = 0; i < arr.length; i++) {
     str += ` ${arr[i]}ºC in ${i + 1} days ...`;
    }
//    console.log('check point 3');
   return str;
    
}

console.log(printForecast(weatherFrcstArr));

// console.log('this is a printFrcstArr', weatherFrcstArr);


