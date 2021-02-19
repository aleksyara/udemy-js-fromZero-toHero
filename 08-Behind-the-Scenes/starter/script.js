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
};

calcAgeArrow(1981);

const alex = {
  year: 1981,
  firstName: 'Aleksei',

  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    const isMillenial = () => {
      // in the new ES6 arrow function will inherit .this from the Parent scope, meaing CalcAge has .this already.
      // console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    // console.log(this);
    console.log(`Hey ${this.firstName}`);
    //^^^^^will be undifnied due to firstName wasn't decleared as a global variable
  },
};

alex.calcAge();

const ivan = {
  year: 2018,
};

ivan.calcAge = alex.calcAge;
ivan.calcAge();

alex.greet(); // will be undifnied due to firstName wasn't decleared as a global variable



