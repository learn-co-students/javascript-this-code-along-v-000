const app = "I don't do much."

var pbj = {
  bread: "white",
  ingredients: ["peanut butter", "jelly"],
  cut: "triangles",
  name: "peanut butter and jelly",
  serve: function() {
    console.log("here's your " + this.name + ", enjoy!");
  }
}

function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
  this.describe = function() {
   console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
 }
}

var blt = new Sandwich("white", ["bacon","lettuce","tomato","mayo"],"rectangle");



var reuben = new Sandwich("rye", ["corned beef","sauerkraut","swiss","russian dressing"],"diagonal");

function serve() {
  console.log("here's your " + this.name + ", enjoy!");
}

function serve() {
  if (arguments.length > 0) {
    var customers = Array.prototype.slice.call(arguments);
    last = customers.pop();
    console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
  }else {
    console.log(this.name +". Order up!");
  }
}

var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
gc.name = "Grilled Cheezy";

serve.call(gc);

serve.apply(gc, ["Terry", "Jerry"]);

function deliverFood(customer, table) {
  console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}

deliverFood.call(gc, "Terry", "4");
deliverFood.apply(pbj, ["Jesse", "15"]);

gc.describe();

var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
}

var describeSalad = gc.describe.bind(salad);
describeSalad();

salad.describe = describeSalad;

salad.describe;

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
setTimeout(visitSally, 1000);
