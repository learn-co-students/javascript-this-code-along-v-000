const app = "I don't do much."

function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.serve = function() {
    console.log("here's your " + this.name + ", enjoy!");
  }
}
 
function serve(customer) {
  console.log("Hey " + customer + ", here's your " + this.name + ", enjoy!");
}
 
var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"],
"Peanut Butter & Jelly");