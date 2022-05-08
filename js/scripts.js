//Business Logic-------------------------------------------

//Constructor function to make pizza pies.. need to somehow be sure the toppings parameter gets an array as argument!!
function PizzaPie(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

//Prototype function to sum the cost of each pizza and return cost of pizza.
PizzaPie.prototype.sumPieCost = function() {
  this.cost = 0;
  if (this.size === "small") {
    this.cost += 10 + (this.toppings.length*1);
  }
  else if (this.size === "medium") {
    this.cost += 14 + (this.toppings.length*1.5);
  } else {
    this.cost += 18 + (this.toppings.length*2);
  }
  return this.cost;
};


//Constructor function to make order with a running total for total cost and a property 'keyToAssign' to increment.
function Order() {
  this.pizzas = {};
  this.cost = 0;
  this.keyToAssign = 0;
}

//Prototype function available to all instances of Order() that will add pizza to the order
Order.prototype.addPie = function (pie) {
  this.cost += pie.sumPieCost();
  pie.keyGiven = this.givePieKey();
  return this.pizzas[pie.keyGiven] = pie;
};

//Prototype function available to all instances of Order() that will increment the keyToAssign property
Order.prototype.givePieKey = function () {
  this.keyToAssign += 1;
  return this.keyToAssign;
};


//UI Logic--------------------------------------

$(document).ready(function(){
  
  $("form#make-your-own").submit(function(event){
    event.preventDefault();
    const pizzaSize = $("input:radio[name=size]:checked").val();
    console.log(pizzaSize);
    const pizzaToppings = [];
    let selectedToppings = $("input[type='checkbox']:checked");
    for (let i=0; i<selectedToppings.length; i+=1) {
      pizzaToppings.push($(selectedToppings[i]).val());
    }
    console.log(pizzaToppings);




  });

});
