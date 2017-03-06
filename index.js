function visitTable() {
  console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}

var sally = new Customer("Sally", "4");
 
//schedule table visit
var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);





// function Sandwich(bread, ingredients, name) {
//   this.bread = bread;
//   this.ingredients = ingredients;
//   this.name = name;
//   this.describe = function() {
//     console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
//   };
// }

// var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam"); 
// var salad = {
//   ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
//   name: "Steak Caesar"
// };
 
// salad.describe = pbj.describe.bind(salad);





// var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam");
// var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
// var salad2 = {
//   ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
//   name: "Steak Caesar"
// };

// pbj.describe();


// // const app = "I don't do much."

// function Sandwich(bread, ingredients, name){
//   this.bread = bread;
//   this.ingredients = ingredients;
//   this.name = name;
// }
 
// // function serve() {
// //   console.log("Hey " + customer + " here's your " + this.name + ", enjoy!");
// // }

// // serve.call(gc);
// // serve.call(gc);

// var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly");
// // serve.call(pbj);
// // serve.call(pbj);

// // var gc2 = {bread: "white", ingredients: ["cheese", "butter", "salt"], name: "Grilled Cheese"};
// // var pbj5 = {bread: "wheat", ingredients: ["peanut butter", "raspberry jam"], name: "Peanut Butter & Jelly"};

// function Boat(name, type){
//   this.name = name;
//   this.type = type;
// }

// var myBoat = new Boat("DoraLee", "Schooner");


// function deliverFood(customer, table){
//   console.log("Delivering " + this.name + " to " + customer + " at table " + table);
// }

// var people = ["fred", "ned", "ted"]; 

// function serve() {
//     if(arguments.length > 0) {
//         var customers = Array.prototype.slice.call(arguments);
//         last = customers.pop();
//         console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
//     }else {
//         console.log(this.name + ". Order up!");
//     }
// }


// serve.call(gc, ["Terry", "Tom", "Tabitha"]);

// index.js:42 Grilled Cheese for  and Terry,Tom,Tabitha. Enjoy!
// undefined
// serve.apply(gc, ["Terry", "Tom", "Tabitha"]);

// index.js:42 Grilled Cheese for Terry, Tom and Tabitha. Enjoy!
// undefined


// function Sandwich(bread, ingredients, cut) {
//   this.bread = bread;
//   this.ingredients = ingredients;
//   this.cut = cut;
// }

// function Sandwich(name, bread, ingredients, cut) {
//   this.name = name;
//   this.bread = bread;
//   this.ingredients = ingredients;
//   this.cut = cut;
//   this.serve = function() {
//  return "here's your fuckin " + this.name + " sandwich!";
//   };
// }

// var blt = new Sandwich("white", ["bacon","lettuce","tomato","mayo"],"rectangle");
// var reuben = new Sandwich("rye", ["corned beef","sauerkraut","swiss","russian dressing"],"diagonal");
// var pbj1 = {
//   bread: "white",
//   ingredients: ["peanut butter", "jelly"],
//   cut: "triangles"
// };
 


// var pbj2 = {
//   bread: "white",
//   ingredients: ["peanut butter", "jelly"],
//   cut: "triangles",
//   name: "peanut butter and jelly",
//   serve: function() {
//     return "here's your " + this.name + ", enjoy!";
//   }
// };

// var pbj3 = new Sandwich("pbj", "pita", ["jelly","peanut butter"], "twice");
 
// var blt4 = new Sandwich("charlie", "wheat", ["bacon", "lettuce", "tomato", "mayo"], "once");
// blt4.meatCount = 4;
// blt4.cookTime = 6;
// blt4.satisfaction = blt4.meatCount * blt4.cookTime;
 
// // console.log("Sorry, your happiness level is about " +blt4.satisfaction + " times less than yesterday." + blt4.serve());


// function serve() {
//   console.log("here's your " + this.name + ", enjoy!");
// }


