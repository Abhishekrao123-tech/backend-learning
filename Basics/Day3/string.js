let name = "Daemon Targerean";
let age = 34;
// ``(backticks) syntax
console.log(`My name is ${name} and My age is ${age}`); //  ` =>backtick
sname = name[7];
console.log(sname);

const gameName = new String("Daemon");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.substring(0, 5));
console.log(name.length);
console.log(gameName.toUpperCase());
console.log(name.toUpperCase());
console.log(name.charAt(0));
console.log(name.indexOf("a"));

console.log(name);

const newname = gameName.substring(0, 4); //4th indec char not included
console.log(newname);
const anothername = gameName.slice(-10, 5); //-ve index prints reverse
console.log(anothername);

const newname1 = "     Gmail.com           ";
console.log(newname1); //removes white spaces from start
console.log(newname1.trim()); //removes white spaces from both sides
//To return a new string with whitespace trimmed from just one end,
//  use trimStart() or trimEnd().

const url = "https://abhishekrao/gmail/%20hello.com"; //here %20 is a space
console.log(url.replace("%20", "-"));

console.log(url.includes("gmail")); //true
console.log(url.includes("google")); //false

let name2 = "Daemon-of-house-Targerean";
console.log(name2.split("-")); //splits the string into an array of substrings
