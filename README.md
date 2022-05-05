Test Driven Development Notes


Describe: PizzaPie()

Test 1: "Constructor function should return an instance of 'PizzaPie' with two properties, one for size(string), and one for toppings (an array)."
Code: const firstPie = new PizzaPie("small", ["cheese", "pepperoni"]);
Expected Output: 
firstPie;
PizzaPie {
  size: "small",
  toppings: ["cheese", "pepperoni"]
}

Describe: Order()

Test 1: "Constructor function should return an instance of user's "Order" with two properties, one an array that will hold PizzaPie objects and the other the total cost."
Code: let myOrder = new Order() {
  pizzas=[];
  cost=0;
}
Expected Output: 
myOrder;
Order {
  pizzas=[];
  cost=0;
}




