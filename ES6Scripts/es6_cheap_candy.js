"use strict";

let products = [
  {product: "Gummy Worms", price: 5.79},
  {product: "Plain M&Ms", price: 2.89},
  {product: "Peanut M&Ms", price: 2.89},
  {product: "Swedish Fish", price: 3.79},

  { product: "Sour Candy", price: 2.15 },
  { product: "Sour Patch", price: 4.10 },
  { product: "Skittles", price: 4.00 },
  { product: "Sour Skittles", price: 3.80 },
  { product: "Bon Bon Bum", price: 5.70 },
  { product: "Frunas", price: 2.05 },
  
];

// Which candies costs less than $4.00?

let affordableCandies = products.filter(product => product.price < 4.00);

// this checks if affordableCandies is not empty.
if (affordableCandies.length > 0) {
  console.log("Candies that cost less than $4.00:");

//then loops through them and to print name and price.
  affordableCandies.forEach(candy => {
    console.log(`${candy.product} - $${candy.price}`);
  });

//this only if no candies meet the conditions.
} else {
  console.log("No candies cost less than $4.00.");
}

console.log("-------------------------------")



// Which candies has "M&M" its name?

//The includes() checks if it includes M&M.
let mmCandies = products.filter(product => product.product.includes("M&M"));

//after creating the new array by filter() it will loop through them and print them out.
if (mmCandies.length > 0) {
  console.log("Candies with 'M&M' in their names:");
  mmCandies.forEach(candy => {
    console.log(candy.product);
  });
} else {
  ;console.log("No candies have 'M&M' in their names.");
}

console.log("-------------------------------")

// Do we carry "Swedish Fish"?

//Note to self: you can also use some()
let carriesSwedishFish = products.find(product => product.product === "Swedish Fish");

if (carriesSwedishFish) {
  console.log("Yes, we carry Swedish Fish.");
} else {
  console.log("No, we do not carry Swedish Fish.");
}


///////////////////////////////////////////////

// let people = [
//   {name: "Zachary", age: 31},
//   {name: "Brittany", age: 35},
//   {name: "Jason", age: 36},
//   {name: "Natalie", age: 37},
//   {name: "Jennifer", age: 38}
// ];
// let somePeople = people.filter(p => p.age >= 36);

// for (let i = 0; i < somePeople.length; i++) {
//   console.log(somePeople[i].name);
// }

/////////////////////////////////////////////////


// let addOnOptions  = [
//   {item: "A/C", price: 1019.00},
//   {item: "Sunroof", price: 699.99},
//   {item: "Mud flaps", price: 299.49},
//   {item: "Heated seats", price: 1199.99},
//   {item: "AM/FM Stereo w/ cassette player", price: 199.00}
// ];

// let oneCheapOption =
// addOnOptions.find((arrayValue) => arrayValue.price < 500);
// if (oneCheapOption != undefined) {
//  console.log(oneCheapOption.item +
//              " $" + oneCheapOption.price);
// }
// else {
//  console.log("No options under $500");
// }

/////////////////////////////////////////////////


// let numbers = [300, 150, 25];

// function getSum(currentTotal, arrayValue) {
//   return currentTotal + arrayValue;
// }

// let sum = numbers.reduce((currentTotal, arrayValue) => currentTotal + arrayValue
//   , 0);

// or

// let numbers = [300, 150, 25];
// let sum = numbers.reduce((currentTotal, arrayValue) => currentTotal + arrayValue, 0);


// console.log("The sum is: " + sum);
