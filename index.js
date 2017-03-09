const app = "I don't do much."

// let pbj = {
//   bread: 'white',
//   ingredients: ['peanut butter', 'jelly'],
//   cut: 'triangle',
//   name: 'peanut butter and jelly',
//   serve: function() {
//     console.log('here is your ' + this.name + ', enjoy!');
//     console.log(this);
//   }
// }

// pbj.serve();

console.log('------------------------------');

// var blt = {
//   bread: "white",
//   ingredients: ["bacon", "lettuce", "tomato"],
//   cut: "diagonal",
//   name: "BLT",
//   serve: function() {
//     console.log("here's your " + this.name + ", enjoy!");
//   }
// }

// blt.serve();

console.log('------------------------------');

function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function() {
    console.log("Your " + this.name + " includes: " + this.ingredients.join(', ') + ". Yum!");
  }
}

let blt = new Sandwich('white', ['bacon', 'lettuce', 'tomatoe', 'mayo'], 'BLT');
var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam");
// console.log(blt);
// blt.name = 'BLT';
// blt.serve();

// fn outside of the Sandwich constructor
// function serve(customer, table) {
//   console.log("Hey " + customer + ", here's your " + this.name + ", enjoy!");
// }

// invoking the 'server()' fn indirectly, we're invoking the 'call()' method of the 'server()' fn
// the 1st arg is always the obj that you wish to assign to 'this' for the fn
// serve.call(blt, "Terry");
// serve.apply(blt, ['Jesse']);

function deliverFood(customer, table) {
  console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}

deliverFood.call(blt, 'Terry', '4');
deliverFood.apply(blt, ['Sam', '15']);

console.log('------------------------------');

pbj.describe();


console.log('------------------------------');

function serve() {
  // check how many args are being passed to this fn, 'arguments' is a js obj
  // if 'serve()' fn is called with no args, then 'else' will execute
  if(arguments.length > 0) {
    // converting the []-like arguments obj into an [] using 'slice()'

    // The arguments object doesn't have a slice method, because it isn't an array, so we have to go through Array.prototype to get to the slice function, and then explicitly set its this to our arguments in order to turn them into an array. This is known as borrowing a function.

    // is like using a kitchen knife to cut that new tv box, you have to go through the kitchen(obj) to get the knife
      var customers = Array.prototype.slice.call(arguments);
      last = customers.pop();
      console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
  }else {
      console.log(this.name + ". Order up!");
  }
}

serve.call(blt);
serve.apply(blt, ["Terry", "Tom", "Ted"]);

console.log('------------------------------');

var salad = {
  ingredients: ['croutons', 'romaine hearts', 'steak', 'parmesen', 'dressing'],
  name: 'Steak salad'
}

// go ahead and invoke the 'describe()' fn that is define in the 'pbj' obj and call it on the 'salad' obj
pbj.describe.call(salad);

// Using bind()
// What we'd really love to do is borrow the describe function in a way that we can call it from our salad. That's where bind comes in.

// Now we've bound the function, with salad assigned to this, into a new function called describeSalad
var describeSalad = pbj.describe.bind(salad);

describeSalad();

// We know that we can assign new properties and methods to objects at runtime. Since our salad doesn't have a describe method, let's give it one using bind
salad.describe = pbj.describe.bind(salad);

salad.describe();

console.log('------------------------------');

// asynchronously using bind()
function visitTable() {
  console.log("The server is visiting " + this.name + " at the table number " + this.tableNumber);
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}

var sally = new Customer('Sally', '2');

// visiting table
var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 2000);
