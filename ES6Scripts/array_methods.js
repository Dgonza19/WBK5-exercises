"use strict";

let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 }, 
    { item: "Baking Potato", price: 1.89, quantity: 6 }, 
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 }, 
    { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 }, 
    { item: "Apples", price: 0.66, quantity: 6 }
];

//a. Write code that searches the courses array using map() function to 
//return only the item name and then use forEach() to display the list of items.

function findItemName(items){
  return items.item;
}

function displayItem(cartItem) {
  console.log (cartItem)
}

let itemList = cart.map(findItemName); itemList.forEach(displayItem)

console.log("----------------------------------------------------")


//b. Write code that determines the total cost of everything in the cart using reduce().
//In the reducer function, remmeber to account for the possibility of there being
// more than 1 unit(ex: 5 apples rather than 1)!

function getTotalCost(totalCost, cartItems) {
  return totalCost + (cartItems.price * cartItems.quantity);
};

let itemsSum = cart.reduce(getTotalCost, 0);

console.log(`Total cost of the ccart is $${itemsSum}`);

console.log("----------------------------------------------------")

//c. Revisit your code for (a) above. Can you sort the list before you display it?

//this is to sort the list
cart.sort(function(a, b){
  if (a.item < b.item) return -1;
  else if (a.item == b.item) return 0;
  else return 1;
});

//display
let numCartItems = cart.length;
for (let i = 0; i < numCartItems; i++) {
    console.log("Item: " + cart[i].item + ", Price: " + cart[i].price + ", Quantity: " + cart[i].quantity)
};

