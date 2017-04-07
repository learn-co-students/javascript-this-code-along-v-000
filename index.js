function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe= () => {
    console.log(`Your ${this.name} includes: ${this.ingredients.join(', ')}. Yum!`);
  }
}
let pbj = new Sandwich('wheat', ['chunky peanut butter', 'blackberry preserves', 'PB&Jam']);

let salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"], name: "Steak Caesar"
}

salad.describe = pbj.describe.bind(salad);

function visitTable() {
  console.log(`The server is visiting ${this.name} at table number ${this.tableNumber}`);
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}

const sally = new Customer('Sally', '4');

const visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);
