'use strict';

// console.log(this);

// const calcAge = function(birthYear){
//     console.log(2037 - birthYear);
//     console.log(this);
// }

// calcAge(1981);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
}

calcAgeArrow(1981);

const alex = {
    year: 1981,
    race: "white",
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.year);
        
    },
}

alex.calcAge();


const ivan = {
    year: 2018,
};
ivan.calcAge = alex.calcAge;
ivan.calcAge();