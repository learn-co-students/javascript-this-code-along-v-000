const app = "I don't do much."
function Sandwich(bread, ingredients, cut, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
  this.name = name;

}

// function serve  {
//     console.log("here's your " + this.name + ", enjoy!");
//   };

// var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
// var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly");

// serve.call(gc);
// serve.call(pbj);
//The first argument for `call` is always the object that you wish to assign to `this` for the function. So by using `call(gc)`, we called the `serve` function, setting `this` to our `gc` sandwich object. That way, when we accessed `this.name` inside of the function, it knew the right sandwich for `this`.
//The only real difference between `call` and `apply` is the way you pass arguments to the target function.

// Let's modify our `serve` function to be a little friendlier:

function serve(customer) {
  console.log("Hey " + customer + ", here's your " + this.name + ", enjoy!");
}

// Using `call`, we simply pass the object for `this` as the first argument, and then any function arguments in order after that. So to use `serve` with `call`, let's do this:

serve.call(gc, "Terry");
serve.call(pbj, "Jesse");

// `apply` only takes two arguments: the value of `this`, and then an *array* of arguments to pass to the target function. So to use `apply` with our new serve object, we'll need to pass that customer value inside an array.

serve.apply(gc, ["Terry"]);
serve.apply(pbj, ["Jesse"]);

// Let's add a function to tell a server where to deliver the sandwich to see how `call` and `apply` are different with more arguments.

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

// The first one should give us the message *"Grilled Cheese. Order up!"*.
// The second should yield *"Peanut Butter & Jelly for Terry, Tom and Tabitha. Enjoy!"*

// In this case, we used `apply` for the second one, but that could just as easily have been `call`. Because the function is not set up to take any specific arguments, we can just use an array of values as the second argument to `apply` or `call` and it will be picked up by the `arguments` object within the function body.

// var customers = Array.prototype.slice.call(arguments);

// This is a great example of using `call` in the real world. We have access to this `arguments` object, which is not a true array, but is an *array-like* object. We can use the `slice` function to "convert" an array-like object to an array of that object's values.

// The `arguments` object doesn't have a `slice` method, because it isn't an array, so we have to go through `Array.prototype` to get to the `slice` function, and then explicitly set its `this` to our `arguments` in order to turn them into an array. This is known as *borrowing* a function.

// **Advanced:** You can think of the `prototype` property of an object as the template for the non-instantiated version of that object. In the example above, rather than using `slice()` on an instance of `Array`, we're accessing the `slice` method on the `Array` prototype, which is why we have to use `call` to give it a valid owner on which to operate. For more information about `prototype`, check out the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype) for `Object.prototype`.

// Using `bind` is similar to `call` in that the first argument will be the value for `this` in the target function, then any arguments for the target function come in order after that.

// The big difference between `bind` and `call` is in the execution. When we use `call`, we execute the function immediately. When we use `bind`, we actually create a new function with that `this` value set, and we can execute it whenever.

// We know that we can assign new properties and methods to objects at runtime. Since our `salad` doesn't have a `describe` method, let's give it one using `bind`.

// function Sandwich(bread, ingredients, name) {
//   this.bread = bread;
//   this.ingredients = ingredients;
//   this.name = name;
//   this.describe = function() {
//     console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
//   }
// }

// var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam");

// var salad = {
//   ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
//   name: "Steak Caesar"
// }

// salad.describe = pbj.describe.bind(salad);

// Okay, using our same `Sandwich` object, we're now borrowing `describe` from `pbj` using `bind`, and assigning it to `salad.describe`. All that remains is to test it out by executing `salad.describe()`.

function visitTable() {
  console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}

// Now when a new customer comes in, we want to create a new customer object, then set up a timer for the server to come after they've had enough time to look at the menu.

// We know that `setTimeout` takes a function as an argument, and we know that we can't directly invoke `visitTable()` because we need to set `this`. Let's use our new friend `bind` to create a new function with that customer bound to `this` that we can execute within `setTimeout`.

//create new Customer instance
var sally = new Customer("Sally", "4");

//schedule table visit
var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);


