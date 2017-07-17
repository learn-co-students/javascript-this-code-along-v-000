const app = "I don't do much."

function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function() {
    console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
  }
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}

var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
}

function serve() {
  if (arguments.length > 0) {
    var customers = Array.prototype.slice.call(arguments);

    // We have access to this arguments object, which is not a true array, but is an array-like object.
    // We can use the slice function to "convert" an array-like object to an array
    // of that object's values.

    // The arguments object doesn't have a slice method, because it isn't an array,
    // so we have to go through Array.prototype to get to the slice function, and
    // then explicitly set its this to our arguments in order to turn them into an array.
    // This is known as borrowing a function.

    // You can think of the prototype property of an object as the template for
    // the non-instantiated version of that object. In the example above, rather
    // than using slice() on an instance of Array, we're accessing the slice method
    // on the Array prototype, which is why we have to use call to give it a valid owner
    // on which to operate.

    last = customers.pop();
    console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
  } else {
    console.log(this.name + ". Order up!");
  }
}

var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly");

function deliverFood(customer, table) {
  console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}

function visitTable() {
  console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
}

serve.call(gc);
serve.apply(pbj, ["Terry", "Tom", "Tabitha"]);

// pbj.describe.call(salad);

// var describeSalad = pbj.describe.bind(salad);
// describeSalad();

salad.describe = pbj.describe.bind(salad);
salad.describe();

//create new Customer instance
var sally = new Customer("Sally", "4");

//schedule table visit
var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);
