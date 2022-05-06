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

Describe: PizzaPie.prototype.sumPieCost()

Test 1: "Prototype function should add the cost of an instance of PizzaPie and return it. To start just the cost of a 'small' pie should be $10, toppings will be ignored."
Code: firstPie.sumPieCost()
Expected Output: 
firstPie;
PizzaPie {
  size: "small",
  toppings: ["cheese", "pepperoni"],
  cost: 10
}

Test 2: "Function should return $10 cost for a 'small' pie but $14 for a 'medium'. Toppings still ignored for now."
Code: firstPie.sumPieCost()
Expected Output: 
firstPie;
PizzaPie {
  size: "small",
  toppings: ["cheese", "pepperoni"],
  cost: 10
}
secondPie;
PizzaPie {
  size: "medium",
  toppings: ["cheese", "pepperoni"],
  cost: 14
}

Test 2: "Function should return $10 cost for a 'small', $14 for a 'medium', and $18 for a 'large'."
Code: firstPie.sumPieCost()
Expected Output: 
firstPie;
PizzaPie {
  size: "small",
  toppings: ["cheese", "pepperoni"],
  cost: 10
}
secondPie;
PizzaPie {
  size: "medium",
  toppings: ["cheese", "pepperoni"],
  cost: 14
}
thirdPie;
PizzaPie {
  size: "large",
  toppings: ["cheese", "pepperoni"],
  cost: 18
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

Test 2: "Constructor function should return an instance of user's "Order" with three properties, one an object that will hold PizzaPie objects, the second the cost of the order, and now the third will hold 'keyToAssign' which will first be set to 0."
Code: let myOrder = new Order();
Expected Output: 
myOrder;
Order {
  pizzas: {},
  cost: 0,
  keyToAssign: 0
}

Describe: Order.prototype.addPie()

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

Test 3: "Function should set a numerical key for each PizzaPie object added. This will replace setting the PizzaPie 'name' as the key when the PizzaPie object is added to the order."
Code: myOrder.prototype.addPie(firstPie);
Expected Output: 
myOrder;
Order {
  pizzas: {1: PizzaPie {
    size: "small", 
    toppings: ["cheese", "pepperoni"],
    keyGiven: 1
    },
  cost:0, 
  keyToAssign: 1
}

Describe: Order.prototype.givePieKey()

Test 1: "Prototype function should return a numerical key that gets incremented each time it's called. This is assigned to each pizza object added to order. This will replace 'name' key currently being assigned when PizzaPie objects get added to Order."
Code: myOrder.prototype.givePieKey()
Expected Output: 
myOrder;
Order { 
  pizzas: {},
  cost: 0,
  keyToAssign: 1
}








