"use strict";


let menu = [
    [ 
      { item: "Sausage and Egg Biscuit", price: 3.69 },
      { item: "Bacon and Egg Biscuit", price: 3.49 },
      { item: "Ham and Egg Biscuit", price: 3.29 }
    ], 
    [ 
      { item: "Chicken Caesar Salad", price: 7.99 },
      { item: "Grilled Cheese Sandwich", price: 5.49 },
      { item: "Turkey Club Wrap", price: 6.99 },
      { item: "Vegetable Soup", price: 4.99 },
    ],
    [ 
      { item: "Grilled Salmon with Asparagus", price: 16.99 },
      { item: "Spaghetti Carbonara", price: 12.49 },
      { item: "Prime Rib Steak", price: 19.99 },
      { item: "Vegetable Stir-Fry", price: 11.99 },
      { item: "Mushroom Risotto", price: 13.49 },
     ],
];

//define a variable names meal that holds an integer in the range 0-2.
// It will represent the meal the user wants to view from the menu. 

//Math.floor: used to round down a floating-point number to the nearest integer that
// is less than or equal to the original number.

//Math.random(), it returns a random decimal value
const meal = Math.floor(Math.random() * 3);

// This sets `meal` to view the lunch menu
console.log(`Meal chosen: ${meal}`);

const selectedMeal = menu[meal];


console.log("----------------------------");

const theMeal = 2;

// Define the meal names
const mealNames = ["Breakfast Menu", "Lunch Menu", "Dinner Menu"];

// Display the heading and items based on the `meal` variable
console.log(mealNames[theMeal]);

menu[theMeal].forEach(item => {
  console.log(`${item.item} - $${item.price}`);
});


