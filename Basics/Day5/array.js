const myarr = [1, 2, 3, 4, 5];
// console.log(myarr);
// console.log(myarr[1]);
console.log(typeof myarr); //object

const myarr2 = [6, 7, 8, 9, "abc", "def"];
// console.log(myarr2);

// so array can have multiple datatype in it, but it is not a good practice to do so

const myarr3 = new Array(1, 2, 35, 4, 1, 5);
// console.log(myarr3);

myarr3.push(6);
myarr3.push(7);
// console.log(myarr3);
myarr3.pop();
// console.log(myarr3);

myarr3.unshift(9); // adds elements to the first index
//console.log(myarr3);
myarr3.shift();
//console.log(myarr3); // removes the first element
//usually unshift is not used much because it places the element in first index
// so that very element needs to be shifted and it leads to more time complexity.

// console.log(myarr3.includes(35));
// console.log(myarr3.includes(350));
// console.log(myarr3.indexOf(0));
// console.log(myarr3.indexOf(1));
// console.log(myarr3);

// when we use includes() it's return type is boolean
// and in indexOf() if index is not present then it returns -1 if the yes then it returns the index

console.log(myarr3.join()); //converts array into string separated by comma
console.log(typeof myarr3.join());

console.log(myarr3);

// const arr = new Array(10);
const arr = new Array(0, 1, 2, 3, 4, 5, 6, 9);
console.log("A", arr);
console.log(arr.slice(0, 3));
console.log("B", arr);
console.log(arr.splice(0, 3));
console.log("C", arr);

/* ********DIFF B/W slice AND splice***********
slice -> just print from the array and no change in original array 
from (st,end) where end is not printed. (doesn't points to refernce)


splice -> print from the array i.e,(st,end) where end is also printed and
it also changes the original array by removing the splice elements from it.(directly points to refernce)
*/
