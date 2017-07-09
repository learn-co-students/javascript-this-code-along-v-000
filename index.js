const app = "I don't do much."

var pbj = {
  bread: "white",
  ingredients: ["peanut butter", "jelly"],
  cut: "triangles"
  name: "peanut butter and jelly",
  serve: function() {
    console.log("here's your "+ this.name +", enjoy!");
  }
}

function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function() {
    console.log("Your "+this.name+" includes: "+this.ingredients.join(", ")+
  ". Yum!");
  }
}

var blt = new Sandwich("white", ["bacon","lettuce", "tomato","mayo"],"rectangle");
var reuben = new Sandwich("rye",["corned beef","sauerkraut","swiss","russian dressing"],
"diagonal");

function serve() {
  if(arguments.length > 0){
    var customers = Array.prototype.slice.call(arguments);
    last = customers.pop();
    console.log(this.name + " for "+ customers.join(", ")+ " and "+ last+". Enjoy!");
  } else {
    console.log(this.name+". Order up!");
  }

}

function deliverFood(customer, table) {
  console.log("Delivering "+this.name+ " to "+customer+ " at table "+table);
}

var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");

serve.call(gc, "Bobby");
serve.apply(gc, ["Bobby"]);

deliverFood.call(gc,"Bobby","3");
deliverFood.apply(gc,["Bobby","3"])

var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
}

gc.describe.call(salad);
var describeSalad = gc.describe.bind(salad);

describeSalad();

salad.describe = gc.describe.bind(salad);

function visitTable() {
  console.log("The server is visiting "+this.name+" at table number "+this.tableNumber);
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}

var sally = new Customer("Sally", "5");

var visitSally = visitTable.bind(sally);
setTimeout(visitSally(), 1000);
