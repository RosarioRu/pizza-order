//Business Logic-------------------------------------------

//Constructor function to make pizza pies

function PizzaPie(size, toppings) {
  this.size = size;
  this.toppings = [toppings];
}


//Constructor function to make order with a running total for cost and a property 'keyToAssign' to increment.

function Order() {
  this.pizzas = {};
  this.cost = 0;
  this.keyToAssign = 0;
}

//Prototype function available to all instances of Order() that will add pizza to the order

Order.prototype.addPie = function (pie) {
  return this.pizzas[pie.name] = pie;
};

//Prototype function available to all instances of Order() that will increment the keyToAssign property

Order.prototype.givePieKey = function () {
  this.keyToAssign += 1;
  return this.keyToAssign;
};


  
//Prototype function/s available to all instances of pizza pies 








//UI Logic--------------------------------------

