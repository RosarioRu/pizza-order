//Business Logic-------------------------------------------

//Constructor function to make pizza pies

function PizzaPie(size, toppings) {
  this.size = size;
  this.toppings = [toppings];
}

//Prototype function to sum the cost of each pizza

PizzaPie.prototype.sumPieCost = function() {
  this.cost = 0;
  if (this.size === "small") {
    this.cost+=10;
  }
  else if (this.size === "medium") {
    this.cost += 14;
  } else {
    this.cost += 18;
  }
};


//Constructor function to make order with a running total for cost and a property 'keyToAssign' to increment.

function Order() {
  this.pizzas = {};
  this.cost = 0;
  this.keyToAssign = 0;
}

//Prototype function available to all instances of Order() that will add pizza to the order

Order.prototype.addPie = function (pie) {
  pie.keyGiven = this.givePieKey();
  return this.pizzas[pie.keyGiven] = pie;
};



//Prototype function available to all instances of Order() that will increment the keyToAssign property

Order.prototype.givePieKey = function () {
  this.keyToAssign += 1;
  return this.keyToAssign;
};


  
//Prototype function/s available to all instances of pizza pies 








//UI Logic--------------------------------------

