function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
  this.serve = function() {
    console.log("here's your " + this.name + ", enjoy!");
  }
}

var blt = new Sandwich("white", ["bacon","lettuce","tomato","mayo"],"rectangle");

blt.serve();

var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly");