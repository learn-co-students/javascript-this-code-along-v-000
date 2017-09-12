const app = "I don't do much."

var pbj = {
    bread: "white",
    ingredients: ["peanut butter", "jelly"],
    cut: "triangles",
    name: "peanut butter and jelly",
    serve: function() {
      console.log("here's your " + this.name + ", enjoy!");
    }
  }

  function Sandwich(bread, ingredients, name) {
    this.bread = bread;
    this.ingredients = ingredients;
    this.name = name;
  };

  function serve() {
    if(arguments.length > 0) {
        var customers = Array.prototype.slice.call(arguments);
        last = customers.pop();
        console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
    }else {
        console.log(this.name + ". Order up!");
    }
}
   
  function deliverFood(customer, table) {
    console.log("Delivering " + this.name + " to " + customer + " at table " + table);
  }
   
  var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
  var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"],
  "Peanut Butter & Jelly");

  serve.call(gc);

  function visitTable() {
    console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
  }

  function Customer(name, tableNumber) {
    this.name = name;
    this.tableNumber = tableNumber;
  }

  //create new Customer instance
var sally = new Customer("Sally", "4");

//schedule table visit
var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);