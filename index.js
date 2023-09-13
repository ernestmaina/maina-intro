function doNothing() {}

// funstions

function sayHello() {
    console.log("Hello!");
  }
//   After calling out the function
  
  function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  }

  sayHelloToIsabel();


  function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything"); // passing the argument 'anything' into our function

  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  
  sayHelloTo("Isabel"); // "Hello, Isabel!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Julio", "hello");

  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }




// add()

function add(x, y) {
    return x + y;
  }

  console.log(add(900, 300));

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }

console.log(say("Hello", "Sofia"));

function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  console.log()

function say(greeting, firstName){
    return `${greeting}, ${firstName}`
}
 console.log("Bye John!")

