const app = "I don't do much."

var pbj = {
  bread: "white",
  ingredients: ["peanut butter", "jelly"],
  cut: "triangles"
}

function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
  this,serve = function() {
    console.log("here's your " + this.name + ", enjoy!")
  }
}

var blt = new Sandwich("white", ["bacon", "lettuce", "tomato", "mayo"], "rectangle");

var reuben = new Sandwich("rye", ["corned beef", "sauerkraut", "swiss", "russian dressing"], "diagonal");

var pbj = {
  bread: "white",
  ingredients: ["peanut butter", "jelly"],
  cut: "triangles",
  name: "peanut butter and jelly",
  serve: function() {
    console.log("here's your " + this.name + ", enjoy!");
  }
}

var blt = new Sandwich("white", ["bacon", "lettuce", "tomato", "mayo"], "rectangle");
blt.name = "BLT";
blt.serve();

function serve(customer) {
  if(arguments.length > 0) {
    var customers = Array.prototype.slice.call(arguments);
    last = customers.pop();
      console.log(this.name + " for " + customers.join(", " + " and " + last + ". Enjoy!");
  } else {
      console.log(this.name + ". Order up!");
  }
}

var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly");

serve.call(gc, "Terry");
serve.call(pbj, "Jesse");

function deliverFood(customer, table) {
  console.log("Delivering " + this.name + "to " + customer + " at table " + table);
}

deliverFood.call(gc, "Terry", "4");
deliverFood.apply(pbj, ["Jesse", "15"]);
