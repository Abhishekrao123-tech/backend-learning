let score = "66";
// let score = null;
// for null it is converted into number as 0

// let score = undefined;
// for undefined it's type assigned to number but value = NaN

console.log(typeof score);
console.log(score);

let valueInNumber = Number(score);
console.log("After conversion");

console.log(typeof valueInNumber);
console.log(valueInNumber);

let score1 = "66abc";
let valueInNum = Number(score1);
console.log(typeof valueInNum);
console.log(valueInNum); //Nan = Not a Number
/*
js can't convert score1 to number 
but its type is assigned to Number

"33" => 33
"33ac" => NaN
true = 1,false = 0
*/

// let isloggedIn = 1;
let isloggedIn = null;

let booleanisloggedin = Boolean(isloggedIn);
console.log(typeof booleanisloggedin);
console.log(booleanisloggedin);
/*
1 => true,0 => false
"" => false;
"ABC" = true
null=false,undefined = false;
*/

let num = 9874;

// let valueinnum = Symbol(num);
let valueinnum = String(num);
// let valueinnum = BigInt(num);
// let valueinnum = Object(num);

console.log(typeof valueinnum);
console.log(valueinnum);
