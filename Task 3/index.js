//Declare product and price variables
var product_1, product_2, product_3;
var price_1, price_2, price_3;

//Give the products names
product_1 = "Nike Air Max";
product_2 = "Oriamo Airpods 2";
product_3 = "Iphone XS Max";

price_1 = 15000;
price_2 = 20000;
price_3 = 220000;

//Welcome user and ask for their name
var user_name;
user_name = prompt("Good day, \nWelcome to Odinma's simple e-commerce app! \nWhat is your name");

//If user provides their name then use it throughout the app else recognise them as a guest

if (user_name != "") {
   console.log("Hello " + user_name);
} else {
   console.log("You didn't put in your name");

   user_name = "Guest";

   console.log('You will be referred to as: ' + user_name);
}

//Provide user with list of available items & Ask the user to choose which item they want to buy by inputting the number

var user_selection;
user_selection = prompt("These are the items currently available: \n\n1. " + product_1 + "\n2. " + product_2 + "\n3. " + product_3 +
 "\n\nTO CHOOSE AN ITEM TO BUY JUST INPUT IT'S NUMBER. (Eg: 1)");

if (user_selection = "1" || "2" || "3") {
    console.log("Your item will be shipped to you in a few days")
} else {
    console.log ("You didn't choose a valid option. Goodbye")
}