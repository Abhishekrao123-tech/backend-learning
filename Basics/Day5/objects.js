const mysym = Symbol("key001");

const JsUser = {
  name: "Abhishek",
  "full name": "Abhishek Rao",
  [mysym]: "my value",
  age: 19,
  email: "abhishek@google.com",
  location: "Bangalore",
  isLoggedIn: false,
  LastLogin: ["Sunday", "Monday", "Wednesday"],
};

// console.log(JsUser.LastLogin);

// console.log(JsUser[LastLogin]); ERROR should be in quotes

// console.log(JsUser["LastLogin"]);

// console.log(JsUser);
// console.log(JsUser.full name);  ERROR because of space in between full and name,
// so we have to use bracket notation and quotes
console.log(JsUser["full name"]);

console.log(JsUser[mysym]); // IMP When we use a symbol ,
//  we have to use bracket notation and not dot notation

JsUser.email = "abhishek@gemini.com"; // we can change the value of a property

// Object.freeze(JsUser);
JsUser.email = "abhishek@chatgpt.com"; // we cannot change the value of a property after freezing the object

console.log(JsUser.email);

JsUser.greetings = function () {
  console.log("Hello Js User");
};
JsUser.greetings(); // we can add a method to an object

JsUser.greet = function () {
  console.log(`Hello Js User,${this.name}`); // IMP to use the value of a property inside a method
  // we have to use this keyword
};
JsUser.greet(); // we can add a method to an object
console.log(JsUser.greetings()); //undefined because the function does not return anything, it just logs to the console
