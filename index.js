const app = "I don't do much."

var pbj= {
    bread: "white", 
    ingredients: ["peanut butter", "jelly"],
    cut: "triangles",
    name: "peanut butter and jelly",
    serve: function() { 
        console.log("here's your" + this.name + ",enjoy!");
    } 

}

pbj.serve()


// var blt = {
//     bread: "white",
//     ingredients: ["bacon", "lettuce", "tomato"],
//     cut: "diagonal",
//     name: "BLT",
//     serve: function() {
//       console.log("here's your " + this.name + ", enjoy!");
//     }
//   }
   
//   blt.serve();


function Sandwich(bread, ingredients, cut) {
    this.bread = bread; 
    this.ingredients = ingredients;
    this.cut = cut; 
    this.serve = function() {
        console.log("Here's your" + this.name + ",enjoy!");
    }
}
var blt = new Sandwich("white", ["bacon","lettuce","tomato","mayo"],"rectangle");
blt.name = "BLT"; // allow the object to receive a name as the Sandwich constructor doesn't include it.
blt.serve()


var reuben = new Sandwich("rye", ["corned beef","sauerkraut","swiss","russian dressing"],"diagonal");

function serve() {
    console.log("here's your " + this.name + ", enjoy!");
  }

  // Will return undefined due to not being attached to an object. Window as default or undefined. 

  