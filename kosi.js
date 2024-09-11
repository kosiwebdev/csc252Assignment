// DECLARING AND INITIALIZING AN ARRAY OF COUNTRIES
let countries = ["Nigeria", "Brazil", "Canada", "Japan", "Australia"];
console.log(countries); // Outputs: ["Nigeria", "Brazil", "Canada", "Japan", "Australia"]


//DECLARING ANS INITIALIZING A TWO DIMENSIONAL ARRAY OF FRUIT CATEGORIES
let fruitCategories = [
    ["apple", "banana", "cherry"], // Category 1: Common fruits
    ["mango", "papaya", "pineapple"], // Category 2: Tropical fruits
    ["blueberry", "strawberry", "raspberry"], // Category 3: Berries
];
console.log(fruitCategories);


//TRANVERSIN THROUGH AN ARRAY OF FRUITS
let fruits = ["apple", "banana", "cherry", "mango", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//CONCATENATING THROUGH AN ARRAY OF FRUIT CATEGORIES
let newFruits = ["apple", "banana", "cherry"];
let result = newFruits.join(", ");
console.log(result); // Outputs: apple, banana, cherry
