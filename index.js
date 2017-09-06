// const app = "I don't do much."
//
// function Sandwich(bread, ingredients, cut, name) {
//   this.bread = bread;
//   this.ingredients = ingredients;
//   this.cut = cut;
//   this.name = name;
// }
//
// // function serve(customer) {
// //     console.log("Hey " + customer + ", here's your " + this.name + ", enjoy!");
// // }
//
// var blt = new Sandwich("white", ["bacon", "lettuce", "tomato", "mayo"], "rectangle", "BLT");
// var reuben = new Sandwich("rye", ["corned beef", "sauerkraut", "swiss", "russian dressing"], "diagonal", "Reuben");
//
// // serve.apply(blt, ["Sara"]);
// // serve.call(reuben, ["Dylan"]);
//
// function deliverFood(customer, table) {
//   console.log("Delivering " + this.name + " to " + customer + " at table " + table);
// }
//
// deliverFood.call(blt, "Terry", "4");
// deliverFood.apply(reuben, ["Jesse", "15"]);
//
//
// function serve() {
//     if(arguments.length > 0) {
//         var customers = Array.prototype.slice.call(arguments);
//         last = customers.pop();
//         console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
//     }else {
//         console.log(this.name + ". Order up!");
//     }
// }
//
// serve.call(blt);
// serve.apply(reuben, ["Terry", "Tom", "Tabitha"]);

// function Sandwich(bread, ingredients, name) {
//   this.bread = bread;
//   this.ingredients = ingredients;
//   this.name = name;
//   this.describe = function() {
//     console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
//   }
// }
//
// var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam");
//
// var salad = {
//   ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
//   name: "Steak Caesar"
// }
//
// salad.describe = pbj.describe.bind(salad);
//
//
// salad.describe();


function visitTable() {
  console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}
var sally = new Customer("Sally", "4");

var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);

visitSally;
