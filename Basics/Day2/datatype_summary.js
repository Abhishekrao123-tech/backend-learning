// primitive data types are of value type or pass by value
const Bignum = 32156487987479686985749685n;

// console.log(typeof Bignum);

const id = Symbol("1234");
const idNum = Symbol("1234");
// console.log(id === idNum); // unique so it is false
// console.log(id);

// array,objects and functions are of reference type  or pass by reference
// Array
const names = ["Abhi", "shek", "kumar"];
// console.log(typeof names);
// console.log(names);
// array,objects and functions  type is object

// Object
const person = {
  name: "Abc",
  age: 19,
  address: "xyz",
};
// console.log(typeof person);
// console.log(person);

// Functions
const greet = function () {
  console.log("Hello World");
};
greet();
