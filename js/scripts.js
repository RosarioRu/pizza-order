//Business Logic-------------------------------------------

//Constructor function to make pizza pies.
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
  let customerOrder = new Order();
  $("form#make-your-own").submit(function(event){
    event.preventDefault();
    const selectedSize = $("input:radio[name=size]:checked").val();
    const selectedToppings = [];
    let pizzaToppings = $("input[type='checkbox']:checked");

    for (let i=0; i<pizzaToppings.length; i+=1) {
      selectedToppings.push($(pizzaToppings[i]).val());
    }

    const customerPizza = new PizzaPie(selectedSize, selectedToppings)
    customerOrder.addPie(customerPizza);
    console.log(customerOrder);
    $(".pizza-cost").html("$" + customerPizza.cost);
    $(".order-cost").html("$" + customerOrder.cost);

    $(".ordering-page").hide();
    $(".pizza-submitted").show();
    $("#another-pizza").show();
    $("#done").show();

  });

  $("#another-pizza").click(function() {
    $("#another-pizza").hide();
    $(".ordering-page").show();
    $(".pizza-submitted").hide();
    $("input:radio[name=size]").prop("checked", false);
    $("input[type='checkbox']").prop("checked", false);
  });

  $("#done").click(function() {
    $("#another-pizza").hide();
    // $(".ordering-page").show();
    $(".pizza-submitted").hide();
    $(".customer-info").show();
  });

});
