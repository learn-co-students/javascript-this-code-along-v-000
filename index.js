const app = "I don't do much."

// function Sandwich(bread, ingredients, name) {
//   this.bread = bread;
//   this.ingredients = ingredients;
//   this.name = name;
// }
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
// var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
// var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly");
//
// serve.call(gc);
// serve.apply(pbj, ["Terry", "Tom", "Tabitha"]);

// BORROWING A FUNCTION

function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function() {
    console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
  }
}

var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam");

pbj.describe();

var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
}
// pbj.describe.call(salad)


//hold on to the function and delay calling it until later//

var describeSalad = pbj.describe.bind(salad);

describeSalad()

//setTimeout and bind

function visitTable() {
  console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}

//create new Customer instance
var sally = new Customer("Sally", "4");

//schedule table visit
var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 10000);
