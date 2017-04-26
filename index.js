var pbj = {
  bread: "white",
  ingredients: ["peanut butter", "jelly"],
  cut: "triangles"
}

//using constructor function to create an object
function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
}
var blt = new Sandwich("white", ["bacon","lettuce","tomato","mayo"],"rectangle");

//attach function to an object
var pbj = {
  bread: "white",
  ingredients: ["peanut butter", "jelly"],
  cut: "triangles",
  name: "peanut butter and jelly",
  serve: function() {
    console.log("here's your " + this.name + ", enjoy!");
  }
}

//creating methods on object within constructor function
function Sandwich(bread, ingredients, cut){
	this.bread = bread;
	this.ingredients = ingredients;
	this.cut = cut;
	this.serve = function(){
		console.log("here's your" + this.name + ", enjoy!")
	}
}

var blt = new Sandwich("white", ["bacon", "lettuce", "tomato", "mayo"], "rectangle");
blt.name = "BLT";
blt.serve();

//using .call()
function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
}
 
function serve() {
  console.log("here's your " + this.name + ", enjoy!");
}
 
var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly");

serve.call(gc);
serve.call(pbj)

//difference between .apply() and .call()
function deliverFood(customer, table) {
  console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}
 
deliverFood.call(gc, "Terry", "4");
deliverFood.apply(pbj, ["Jesse", "15"]); //parameters should be inside an array

//function borrowing 
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

pbj.describe.call(salad) //describes salad using sandwich function

//using .bind()
var describeSalad = pbj.describe.bind(salad);
describeSalad();
//we can add it as a method to salad
salad.describe = pbj.describe.bind(salad)

//asynchronous execution with bind()
function visitTable(){
	console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
}

function Customer(name, tableNumber){
	this.name = name;
	this.tableNumber = tableNumber;
}

//create new customer
var sally = new Customer("Sally", "4");
//schedule table visit
var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);
