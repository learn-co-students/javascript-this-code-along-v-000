// constructor function
function Sandwich(bread, ingredients, cut, name) {
    this.bread = bread;
    this.ingredients = ingredients;
    this.cut = cut;
    this.name = name;
    this.describe = function() {
        console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
    }
}

function Customer(name, tableNumber) {
    this.name = name;
    this.tableNumber = tableNumber;
}

// additional functions
function serve(){
    if (arguments.length > 0) {
        var customers = Array.prototype.slice.call(arguments);
        var last = customers.pop();
        console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
    } else {
        console.log(this.name + ". Order up!");
    }
}

function deliverFood(customer, table) {
    console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}

function visitTable() {
    console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
}

// Created objects
var blt = new Sandwich("white", ["bacon", "lettuce", "tomato", "mayo"], "rectangle", "BLT");
var reuben = new Sandwich("rye", ["corned beef", "sauerkraut", "swiss", "russian dressing"], "diagnol", "reuben");
var gc = new Sandwich("white", ["cheese"], "diagnol", "Grilled Cheese");
var pbj = new Sandwich("wheat", ["peanut butter", "grape jelly"], "circle", "Peanut Butter & Jelly");

var salad = {
    ingredients: ["apple", "dried cranberries", "grilled chicken", "balsamic dressing"],
    name: "Salad"
}

salad.describe = pbj.describe.bind(salad);

var sally = new Customer("Sally", 10);
var visitSally = visitTable.bind(sally);

// Call Functions
serve.call(blt);
serve.call(reuben, "Trai", "Keon");
serve.apply(gc);
serve.apply(pbj, ["Keon", "Trai"]);

deliverFood.call(blt, "Trai", 10);
deliverFood.call(reuben, "Keon", 4);
deliverFood.apply(gc, ["Trai", 10]);
deliverFood.apply(pbj, ["Keon", 4]);

blt.describe();
salad.describe();

setTimeout(visitSally, 1000);