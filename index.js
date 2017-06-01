const app = "I don't do much."
function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function() {
    console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
  }
}

var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam");

var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
}

salad.describe = pbj.describe.bind(salad);

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
