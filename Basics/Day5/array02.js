let marvel = ["IronMan", "Captain", "Thor", "Loki"];
let Dc = ["SuperMan", "Flash", "BatMan"];

// marvel.push(Dc);
// console.log(marvel);

const new_arr = marvel.concat(Dc);
// console.log(new_arr);

const newm_arr = [...marvel, ...Dc]; //for merging 2 or more array
// console.log(newm_arr);

const arr = [1, 2, [3, 4], 5, 6, [7, 8, [9, 10, 11]]];
// console.log(arr);
// console.log(arr.flat(Infinity)); //flat=>converts all subarray into one Infinity-level
