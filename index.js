const app = "I don't do much."

function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function() {
    console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
  }
}

var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly");
var blt = new Sandwich("white", ["bacon", "lettuce", "tomato", "mayo"], "BLT");
var reuben = new Sandwich("rye", ["corned beef","sauerkraut","swiss","russian dressing"], "Reuben");
var gc = new Sandwich("white", ["cheese"], "Grilled Cheese")

// function serve() {
//   console.log("here's your " + this.name + ", enjoy!");
// }

//the argument of the call function assigns THIS. Gives the same result for above function
// serve.call(gc);
// serve.call(pbj);
// serve.apply(gc);

// function serve(customer) {
//   console.log("Hey " + customer + ", here's your " + this.name + ", enjoy!")
// }

// The first argument for call() or apply() is always the value for this
// serve.call(gc, "Terry");
  // >> Hey Terry, here's your Grilled Cheese, enjoy!
// serve.call(gc);
  // >> Hey undefined, here's your Grilled Cheese, enjoy!
// serve.call("Terry")
  // >> Hey undefined, here's your undefined, enjoy!

// The second argument for apply() is an array of values
// serve.apply(pbj, ["Jesse"]);
  // >> Hey Jesse, here's your Peanut Butter & Jelly, enjoy!

function deliverFood(customer, table) {
  console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}

deliverFood.call(gc, "Terry", "4");
deliverFood.apply(pbj, ["Jesse", "15"]);


function serve() {
  if(arguments.length > 0) {
    var customers = Array.prototype.slice.call(arguments);
    last = customers.pop();
    console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
  } else {
    console.log(this.name + ". Order up!");
  }
}

serve.call(gc);
serve.apply(pbj, ["Terry", "Tom", "Tabitha"]);

pbj.describe();

var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
}

// This works but is confusing, better to use BIND
pbj.describe.call(salad);
  // >> Your Steak Caesar includes: croutons, romaine hearts, steak, parmesan, caesar dressing. Yum!

var describeSalad = pbj.describe.bind(salad);
describeSalad();
  // >> Your Steak Caesar includes: croutons, romaine hearts, steak, parmesan, caesar dressing. Yum!

//OR

salad.describe = pbj.describe.bind(salad);
salad.describe();
// >> Your Steak Caesar includes: croutons, romaine hearts, steak, parmesan, caesar dressing. Yum!


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
