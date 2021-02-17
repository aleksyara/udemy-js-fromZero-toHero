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

console.log('PROBLEM 1:');

// We work for a company building a smart home thermometer. 
// Our most recent task is this: "Given an array of temperatures of one day, 
// calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

let calcTempAmplitude = function(arr){
    let maxTemp = 0;
    let minTemp = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > maxTemp){
            // console.log('maxTemp', maxTemp);
            // console.log('arr[i] in the 1st if', arr[i]);
            maxTemp = arr[i];
        } else if (arr[i] < minTemp) {
            // console.log('arr[i] in the else if', arr[i]);
            minTemp = arr[i];
            // console.log('minTemp ', minTemp);
        }
    }
    
    console.log('FINAL max', maxTemp);
    console.log('FINAL min', minTemp);

    return  console.log('THIS IS A TempURTURE Amplitude ', maxTemp - minTemp);
    
}
calcTempAmplitude(temperatures);

// PROBLEM 2:
// Function should now receive 2 arrays of temps
console.log('PROBLEM 2:');

const temperatures2 = [34, -2, -6, -19, 'error', 9, 13, 17, 15, 14, 9, 5000];

let calcTempAmplitudeFrom2Arr = function(arr1, arr2){
    let newArr = temperatures2.concat(temperatures);
    // console.log('new Arr', newArr);
    calcTempAmplitude(newArr);
}

calcTempAmplitudeFrom2Arr(temperatures, temperatures2);


// PROBLEM 3:
// convert Temp to Kelvin. User will enter the data through the pop-up window.

const convertTempToKelvin = function (){

   let measruments = {
        value: parseInt(prompt('Enter degree in Celcues')),
        type: 'temp',
        name: "C",
    }
    // console.log(measruments.value);
    let kelvin = measruments.value + 273; 
    console.log('kelvin', kelvin);
    
    return kelvin
};

convertTempToKelvin();
