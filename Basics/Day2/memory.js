// Two types of memory
// Stack and Heap Memory

// Stack memory / copy of value is passed
let username = "user_1231";
let admin = username;

admin = "Abhishek";

console.log(username);
console.log(admin); //only copy is changed

// Heap memory / actual value is passed

let userone = {
  email: "user@google.com",
  upi: "usr@bvl",
};

let usertwo = userone;
usertwo.email = "Abhishek@gmail.com";

console.log(userone); //both are changed
console.log(usertwo);
