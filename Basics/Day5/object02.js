// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "01";
tinderUser.name = "Abhishek";
tinderUser.isLoggedIn = "false";

// console.log(tinderUser);

const regularUser = {
  email: "abhishek@google.com",
  fullname: {
    userfullname: {
      Fname: "Abhishek",
      Lname: "Rao",
    },
  },
};

// console.log(regularUser.fullname.userfullname.Lname); // IMP to access the value of a property inside an object, we have to use dot notation

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = Object.assign({}, obj1, obj2); // IMP Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.
// Where {} is target object and obj1 and obj2 are source objects.
// So the values of obj1 and obj2 will be copied to the target object which is an empty object {}.

const obj3 = { ...obj1, ...obj2 };

// console.log(objṢS3);

const users = [
  {
    id: 1,
    email: "abhishek@google.com",
  },
  {
    id: 1,
    email: "abhishek@google.com",
  },
  {
    id: 1,
    email: "abhishek@google.com",
  },
];
users[1].email;
console.log(users[0].id);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //array in array

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
