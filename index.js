const app = "I don't do much."

function Sandwich(bread, ingredients, name) {
    this.bread = bread;
    this.ingredients = ingredients;
    this.name = name;
}

function deliverFood(customer, table) {
    console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}

var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly");

console.log(deliverFood.call(gc, "Terry", "10"));
console.log(deliverFood.apply(pbj, ["Jesse", "4"]));

function visitTable() {
    console.log("The server is visiting " + this.name + " at table number "+ this.tableNumber);
}

function Customer(name, tableNumber) {
    this.name = name;
    this.tableNumber = tableNumber;
}

var sally = new Customer("Sally", "4");

var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);