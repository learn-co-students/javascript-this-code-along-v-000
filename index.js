const app = "I don't do much."
function Sandwich(bread, ingredients, cut) {
    this.bread = bread;
    this.ingredients = ingredients;
    this.cut = cut;
    
}

function serve(customer) {
        console.log("Hey, " + customer + ", here's your " + this.name + ", enjoy!")
    }
var blt = new Sandwich("white",["bacon","lettuce","tomato","mayo"],"rectangle");
blt.name = "BLT";
serve.call(blt, "michael");