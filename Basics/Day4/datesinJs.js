let nowDate = new Date();
// console.log("================================");
// console.log(nowDate);
// console.log(nowDate.toString());
// console.log(nowDate.toDateString());
// console.log(nowDate.toLocaleString());
// console.log(nowDate.toLocaleDateString());
// console.log(nowDate.toJSON());
// console.log(nowDate.toISOString());
// console.log("================================");

// console.log(typeof nowDate);
// Date in JS is of object type
// newDate = new Date(2026, 0, 21);  // here month is 0 based index, so 0 means January
// newDate = new Date("2026-01-21");
newDate = new Date(2026, 0, 21, 5, 30);
// console.log(newDate);

let timestamp = Date.now();

// console.log(timestamp);
// console.log(newDate.getTime());
// console.log(newDate.getTime());
// console.log(Math.floor(newDate.getTime() / 1000)); // seconds

// console.log(newDate.getTime());
// console.log(newDate.getDay()); // returns the day of the week (0-6) where 0 is Sunday and 6 is Saturday
// console.log(newDate.getDate()); // returns the day of the month (1-31)
// console.log(newDate.getMonth()); // returns the month (0-11) where 0 is January and 11 is December
// console.log(newDate.getFullYear()); // returns the year

// console.log(newDate.getMonth() + 1);
newDate.toLocaleString("default", {
  weekday: "long",
});
