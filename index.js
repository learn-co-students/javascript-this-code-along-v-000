const app = "I don't do much."
/* CODE ALONG AND NOTES -- no tests for this lab

function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
}

var blt = new Sandwich("white", ["bacon","lettuce","tomato","mayo"],"rectangle");
var reuben = new Sandwich("rye", ["corned beef","sauerkraut","swiss","russian dressing"],"diagonal");

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
//  this.serve = function() {
//    console.log("here's your " + this.name + ", enjoy!");
//  }
}

function serve() {
  console.log("here's your " + this.name + ", enjoy!");
}

//var blt = new Sandwich("white", ["bacon","lettuce","tomato","mayo"],"rectangle");
// add name to the blt before serving
//blt.name = "BLT";
//blt.serve();


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
serve.apply(pbj);*/

//function serve(customer) {
  //console.log("Hey " + customer + ", here's your " + this.name + ", enjoy!");
//}

//var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
//var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"],
//"Peanut Butter & Jelly");
/*
serve.call(gc, "Terry"); //Hey Terry, here's your Grilled Cheese, enjoy!
serve.call(pbj, "Jesse"); //Hey Jesse, here's your Peanut Butter & Jelly, enjoy!

serve.call(gc); //Hey undefined, here's your Grilled Cheese, enjoy!
serve.call("Terry"); //Hey undefined, here's your undefined, enjoy!

serve.apply(gc, ["Terry"]); //Hey Terry, here's your Grilled Cheese, enjoy!
serve.apply(pbj, ["Jesse"]); //Hey Jesse, here's your Peanut Butter & Jelly, enjoy!
*/

/*
function deliverFood(customer, table) {
  console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}

deliverFood.call(gc, "Terry", "4"); //Delivering Grilled Cheese to Terry at table 4
deliverFood.apply(pbj, ["Jesse", "15"]); //Delivering Peanut Butter & Jelly to Jesse at table 15

function serve() {
    if(arguments.length > 0) {
        var customers = Array.prototype.slice.call(arguments);
        last = customers.pop();
        console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
    }else {
        console.log(this.name + ". Order up!");
    }
}

serve.call(gc); //Grilled Cheese. Order up!
serve.apply(pbj, ["Terry", "Tom", "Tabitha"]); //Peanut Butter & Jelly for Terry, Tom and Tabitha. Enjoy!
*/

function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function() {
    console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
  }
}

var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam");

pbj.describe(); //Your PB&Jam includes: chunky peanut butter, blackberry preserves. Yum!

var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
}
//we can borrow functions from other objects with call and apply, we should be able to do that here:
pbj.describe.call(salad); //Your Steak Caesar includes: croutons, romaine hearts, steak, parmesan, caesar dressing. Yum!
//**var describeSalad = pbj.describe.bind(salad); //bind describe function with salad set to this
//describeSalad(); //Your Steak Caesar includes: croutons, romaine hearts, steak, parmesan, caesar dressing. Yum!
salad.describe = pbj.describe.bind(salad); //better way of writeing the above two lines
salad.describe() //Your Steak Caesar includes: croutons, romaine hearts, steak, parmesan, caesar dressing. Yum!

function visitTable() {
  console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}
//Now when a new customer comes in, we want to create a new customer object, then set up a timer for the server to come after they've had enough time to look at the menu
//let's use bind to create a new function with that customer bound to this that we can execute within setTimeout
//create new Customer instance
var sally = new Customer("Sally", "4");

//schedule table visit
var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);
