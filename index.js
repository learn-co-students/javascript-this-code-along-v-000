function Sandwich(name, bread, ingredients, cut) {
  this.name = name
  this.breadType = bread
  this.ingredients = ingredients
  this.cut = cut
  this.serve = function() {
    console.log("here's your" + this.name + ", enjoy!")
  }
}
var blt = new Sandwich("BLT", "white", ["bacon", "lettuce", "tomato"], "rectangle")
pbj.blt() // "here's your BLT, enjoy!"
// this.name refers to the name attribute of the pbj object becase pbj invoked the serve function

// OR

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

serve.call(gc) // "here's your Grilled Cheese, enjoy!"

// CALL V. APPLY

function serve(customer) {
  console.log("Hey " + customer + ", here's your " + this.name + ", enjoy!");
}

serve.call(gc, "Bob")
serve.apply(gc, ["Bob"])

// A REAL WORLD USE OF CALL

function serve() {
    if(arguments.length > 0) {
        var customers = Array.prototype.slice.call(arguments);
        last = customers.pop();
        console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
    }else {
        console.log(this.name + ". Order up!");
    }
}
