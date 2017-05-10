const app = "I don't do much."

function visitTable() {
  console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}

var sally = new Customer("Sally");

var visitSally = visitTable.bind(sally);

setTimeout(visitSally, 1000);
