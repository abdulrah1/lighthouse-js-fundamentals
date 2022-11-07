/*
const sayHello = function () {
  console.log("Hello World!")
}
// This is to invoke the function
sayHello();



// Instead of having to repeat our code, we can simply pass along their names to our function.
const sayHello = function (name) {
  console.log(`Hello, ${name}`)
}

sayHello('Afgunz');
sayHello('Fenix');
sayHello('ALL HATE')

*/

// Return & Console.log in Function

const sayHelloConsole = function (name) {
  console.log("Hello " + name)
}

sayHelloConsole ("afgunz"); 

// Function + Console.log >>> output "Hello afgunz" to the console.

const sayHelloReturn = function (name) {
  return "Hello " + name;
}

const greeting = sayHelloReturn ('John');

console.log(greeting);

// Function + Return + Variable >>>> returns the string "Hello John" to a variable without an output !!! Must input the Variable into console.log to provide the output.





