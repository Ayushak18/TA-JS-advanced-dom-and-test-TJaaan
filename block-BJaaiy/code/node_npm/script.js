const moment = require("moment");
let _ = require("lodash");

let body = document.querySelector("body");

// Heading One
let heading1 = document.createElement("h1");
heading1.innerText = moment().format("MMMM Do YYYY, h:mm:ss a");

// Heading Two
let heading2 = document.createElement("h2");
heading2.innerText = moment().format("dddd");

// Heading Three
let heading3 = document.createElement("h3");
heading3.innerText = moment().format("MMM Do YY");

body.append(heading1, heading2, heading3);

// Relative Dates

console.log("After Addition");
console.log(moment().add(7, "days").calendar());
console.log(moment().add(7, "months").calendar());
console.log(moment().add(7, "years").calendar());
console.log("After Subtraction");
console.log(moment().subtract(7, "days").calendar());
console.log(moment().subtract(7, "months").calendar());
console.log(moment().subtract(7, "years").calendar());

// Difference Between Two dates
console.log("Difference Between Two Dates");

let dateOne = moment([2015, 09, 11]);
let dateTwo = moment([2014, 11, 11]);
console.log(dateOne.diff(dateTwo, "days"));

let dateThree = moment([2015, 09, 16]);
let dateFour = moment([2014, 11, 27]);
console.log(dateThree.diff(dateFour, "days"));

let date1 = moment([2020, 01, 01]);
let date2 = moment([2018, 01, 01]);
console.log(date2.from(date1));

let date3 = moment([2010, 01, 01]);
let date4 = moment([2018, 01, 01]);
console.log(date3.from(date4));

console.log(moment([2019]).isLeapYear());
console.log(moment([2020]).isLeapYear());

console.log("*******************Lodash********************");

let arrayLoad = [12, 15, 65, 5, 864, 65, 465, 463, 51, 3, 30, 03, 4, 13, 31, 1];

console.log(_.chunk(arrayLoad, [(size = 2)]));
console.log(_.drop(arrayLoad, [(n = 2)]));
console.log(_.dropRight(arrayLoad, [(n = 5)]));
console.log(_.last(arrayLoad));
console.log(_.nth(arrayLoad, [(n = 5)]));
