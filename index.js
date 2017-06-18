function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function(){
      console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
  }
}

function deliverFood(customer, table){
    console.log("Delivering " + this.name + " to " + customer + " at table " + table);
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

function visitTable() {
    console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
}

function Customer(name, tableNumber) {
    this.name = name;
    this.tableNumber = tableNumber;
}

var blt = new Sandwich("white", ["bacon","lettuce","tomato","mayo"],"BLT");
var reuben = new Sandwich("rye", ["corned beef","sauerkraut","swiss","russian dressing"],"Reuben");
var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"],
"Peanut Butter & Jelly");

var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
};

salad.describe = pbj.describe.bind(salad);


var sally = new Customer("Sally", 4);
var visitSally = visitTable.bind(sally);

deliverFood.call(pbj, 'terry', 10);
deliverFood.call(blt, 'jesse', 4);
deliverFood.apply(reuben, ['terry', 10]);
deliverFood.apply(gc, ['jesse', 4]);

serve.call(gc);
serve.apply(pbj, ["Terry", "Tom", "Tabitha"]);

pbj.describe();
salad.describe();

setTimeout(visitSally, 1000);