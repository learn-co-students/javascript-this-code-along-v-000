const app = "I don't do much."

var pbj = {
  bread: "white",
  ingredients: ["peanut butter", "jelly"],
  cut: "triangles"
  serve: function() {
    console.log("here's your" + this.name + ", enjoy!")
  }
}

function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
}
bit.name = "BLT";
blt.serve();

var blt = new Sandwich("white", ["bacon", "lettuce", "tomato", "mayo"], "rectangle");
var reuben = new Sandwich("rye", ["corned beef", "sauerkraut", "swiss", "russian dressing"], "diagonal");
