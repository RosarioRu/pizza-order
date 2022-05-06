Test Driven Development Notes


Describe: PizzaPie()

Test 1: "Constructor function should return an instance of 'PizzaPie'(an object) with three properties, one for name (string), one for size (string), and one for toppings (an array)."
Code: const firstPie = new PizzaPie("rose", "small", ["cheese", "pepperoni"]);
Expected Output: 
firstPie;
PizzaPie {
  name: "rose",
  size: "small",
  toppings: ["cheese", "pepperoni"]
}

Describe: Order()

Test 1: "Constructor function should return an instance of user's "Order" with two properties, one an object that will hold PizzaPie objects and the other the total cost."
Code: let myOrder = new Order();
Expected Output: 
myOrder;
Order {
  pizzas: {},
  cost: 0
}

Describe: prototype.addPie()

Test 1: "Prototype function for instance of 'Order()' that should add a PizzaPie object to the object with key 'pizzas."

Code: myOrder.prototype.addPie(firstPie);
Expected Output: 
myOrder;
Order {
  pizzas: {PizzaPie {
    size: "small", 
    toppings: ["cheese", "pepperoni"]
    },
  cost:0
}

Test 2: "Function should set name property of the 'PizzaPie' object as the key."
Code: myOrder.prototype.addPie(firstPie);
Expected Output: 
myOrder;
Order {
  pizzas: {rose: PizzaPie {
    name: "rose",
    size: "small", 
    toppings: ["cheese", "pepperoni"]
    },
  cost:0
}





