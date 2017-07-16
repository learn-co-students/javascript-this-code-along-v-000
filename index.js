function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
}

function serve() {
  if(arguments.length > 0) {
      var customers = Array.prototype.slice.call(arguments);
      last = customers.pop();
      console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
  }else {
      console.log(this.name + ". Order up!");
  }
}

var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"],"Peanut Butter & Jelly");

function deliverFood(customer, table) {
  console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}

deliverFood.call(gc, "Terry", "4");
deliverFood.apply(pbj, ["Jesse", "15"]);
