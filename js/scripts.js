//Business Logic-------------------------------------------

//Constructor function to make pizza pies

function PizzaPie(size, toppings) {
  this.size = (size);
  this.toppings = [toppings];
}

//Constructor function to make order

function Order() {
  this.pizzas=[];
  this.cost=0;
}

//Prototype function available to all instances of Order() that will add pizza to the order

Order.prototype.addPie = function (pie) {
  return this.pizzas.push(pie);
};

  
//Prototype function/s available to all instances of pizza pies








//UI Logic--------------------------------------

