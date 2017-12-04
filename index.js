
var blt = {
    bread: "white",
    ingredients: ["bacon", "lettuce", "tomato"],
    cut: "diagonal",
    name: "BLT",
    serve: function () {
        console.log("here's your " + this.name + ", enjoy!");
    }
}

blt.serve();

function Sandwich(bread, ingredients, cut) {
    this.bread = bread;
    this.ingredients = ingredients;
    this.cut = cut;
    this.serve = function () {
        console.log("here's your " + this.name + ", enjoy!");
    }
}

var blt = new Sandwich("white", ["bacon", "lettuce", "tomato", "mayo"], "rectangle");

blt.serve();

function Sandwich(bread, ingredients, cut) {
    this.bread = bread;
    this.ingredients = ingredients;
    this.cut = cut;
    this.serve = function () {
        console.log("here's your " + this.name + ", enjoy!");
    }
}

var blt = new Sandwich("white", ["bacon", "lettuce", "tomato", "mayo"], "rectangle");
// add name to the blt before serving
blt.name = "BLT";
blt.serve();