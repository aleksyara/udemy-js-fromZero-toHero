'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destrucuring Objects

const { name, openingHours, categories } = restaurant;
console.log('given object: ', name, openingHours, categories);

// Giving new Variables name
const { name: restName, openingHours: hours, categories: type } = restaurant;
console.log(restName, hours, type);
console.log('given object: ', name, openingHours, categories);

// Switching variables  (mutating)
// a)
let a = 1111;
let b = 23;
const obj = { a: 4, b: 5, c: 6 };
({ a, b } = obj); //() is essential
console.log('new a = ', a, 'new b = ', b);
// b) Nested Object


const user = {
  id: 339,
  name: 'Fred',
  age: 42,
  education: {
    degree: 'Masters',
  },
};
// change Variables name
const {
  education: {degree = "Bach"},
} = user;
console.log(degree); //prints: Masters

// const {
//   sat: { open: 2},
// } = restaurant;
// console.log(open, close);

// Destructuring Arrays
let [, main, secondary] = restaurant.categories;
console.log('main', main);
console.log('secondary', secondary);

// Switching variables (mutating)
[main, secondary] = [secondary, main];
console.log('New main', main);
console.log('New secondary', secondary);
console.log('Updated ARR - restaurant.categories', restaurant.categories);

//Recive 2 return values from function 'order'
const [starter, mainCourse] = restaurant.order(2, 0);
console.log('starter', starter);
console.log('mainCourse', mainCourse);

//Distructuring nested arr
const nestedArr = [2, 6, [4, 7]];
const [x, , [y, z]] = nestedArr;
console.log(x, y, z);
