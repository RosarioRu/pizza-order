# _Night Owl Pizza_

#### By _**Rosario Ruvalcaba**_

#### _An online ordering page featuring a build-your-own pizza form that can be submitted multiple times and displays the price of the pizzas and the order total. _

## Technologies Used

* _HTML_
* _CSS_
* _Markdown_
* _Bootstrap_
* _JavaScript_
* _jQuery_

## Description

_This webpage was created as a project following Epicodus's Object-Oriented-Intermediate-Javascript section. The program uses forms to capture the size and toppings of a pizza and then calculates the cost. It uses Constructor and Prototype functions to store the user-created pizzas and add different properties (pie cost, numeric key for each pizza, total cost) as they are added to the final order. The cost of each individual pizza is displayed for the user as well as the order total. User can submit multiple pizzas.

## Setup/Installation Requirements

* _Clone repository from Github and save a copy on own computer_

* _Using GUI or terminal, open cloned project directory (titled 'pizza-order') to view files_

* _Using GUI or terminal, open index.html file to view project locally_

* _Stylesheet, image, js file, and readme can also be opened from project home directory_

* _(See Github page for this project](https://rosarioru.github.io/pizza-order/)_

## Known Bugs

* _No known bugs_

## License

MIT License

Copyright (c) _May_2022_ _Rosario Ruvalcaba Harwood_


## Test Driven Development Notes

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

Test 3: "Function should return $10 cost for a 'small', $14 for a 'medium', and $18 for a 'large'."
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

Test 4: "Function should take number of toppings and multiply that by 1.5 for a sm pizza, then add this to the base cost (determined previously based on size of pizza."
Code: firstPie.sumPieCost()
Expected Output: 
firstPie;
PizzaPie {
  size: "small",
  toppings: ["cheese", "pepperoni"],
  cost: 13
}

Test 5: "Function should take number of toppings and multiply that by 1 for a sm pizza, 1.5 for a medium and by 2 for a large, then add this to the base cost (determined previously based on size of pizza."
Code: firstPie.sumPieCost()
Expected Output: 
firstPie;
PizzaPie { size: "small", toppings: ["cheese", "pepperoni"], cost: 12}
secondPie;
PizzaPie { size: "medium", toppings: ["cheese", "pepperoni"], cost: 17}
thirdPie;
PizzaPie { size: "large", toppings: ["cheese", "pepperoni"], cost: 22}


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

Test 4: "When an instance of PizzaPie() gets added to instance of Order(), it should increase the total cost (in 'Order") by the amount of the individual's pizza cost."
Code: myOrder.prototype.addPie(firstPie);
Expected Output: 
myOrder;
Order {
  pizzas: {1: PizzaPie {
    size: "small", 
    toppings: ["cheese", "pepperoni"],
    keyGiven: 1
    },
  cost: 12, 
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








