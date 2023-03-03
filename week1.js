// #1.
2 == "2"; // true
"he" == "she"; // false
2 === 2; // true
true === "true"; // false
"true" != true; // true
"true" !== true; // true

// ----------------------------------

// #2.
// var = globally scoped
// const = locally scoped, cannot change
// let = locally scoped, can change

// ----------------------------------

// #3
// First Class Function:

const sayHello = () => {
  return "Hello";
};

sayHello();

//Higher Order Function
const printNameWithHello = (helloMessage, name) => {
  console.log(helloMessage, `${name}!`);
};

printNameWithHello(sayHello(), "Kelsey");

//Callback Function

const screamHello = (scream) => {
  console.log(scream + `!!!!!`);
};

screamHello(sayHello());

// ----------------------------------

//#4
//Output:
// a: 'hi'
// b: 'bye'
// c: undefined

// ----------------------------------
// #5
const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//For Loop
for (i = 0; i < someArray.length; i++) {
  console.log("For Loop", someArray[i]);
}

// For Of
for (const num of someArray) {
  console.log("For of", num);
}

// ----------------------------------

// #6
const someArray1 = [1, 2, 3, 4, 5];

// concat - NM

// length - NM
console.log("Length:", someArray1.length);

// filter - NM
console.log(
  "Filter:",
  someArray1.filter((num) => num !== 3)
);

// find - NM
console.log(
  "Find",
  someArray1.find((num) => num === 5)
);

//slice - NM
console.log("Slice:", someArray1.slice(2, 4));

//splice - M

//includeds - NM

//indexOf- NM
console.log("indexof:", someArray1.indexOf(2));

//isArray - NM

//join - NM

//map - NM

//pop - M

//push - M

//shift - M

//unshift - M

// sort [9,1,3,5] - M
let sorted = [9, 1, 3, 5];

// reduce - NM
console.log(sorted.reduce((starterNum, val) => starterNum + val, 0));

// ----------------------------------

// #7
const someObject = {
  color: "black",
};

someObject.name = "John Doe";

Object.assign({}, someObject);
someObject.age = 22;
someObject["address"] = "123 test address";
let keys = Object.keys(someObject);
let values = Object.values(someObject);

for (test in someObject) {
  console.log("here!", someObject[test]);
}

// ----------------------------------

// #8

const numbers = [{ num: 1 }, { num: 2 }, { num: 3 }];

for (const { num } of numbers) {
  console.log(num);
}

// ----------------------------------

// #9
const newSet = new Set();
console.log("test", newSet.add("John Doe"));
console.log(newSet.has("John Doe"));
console.log(newSet.delete("John Doe"));
console.log(newSet);

// ----------------------------------

// #10

const newMap = new Map();
newMap.set("name", "john doe");
console.log(newMap.has("john doe"));
console.log(newMap.delete("name", "john doe"));
console.log(newMap);

// #11 ASYNC

// Async programming allows you to run multiple lines of code at the same time.
// You can use promises which is an object returned by async function to which allows us keywords such as async and await
// These keywords are known to help us find out if our promise is successful or if it has failed

// ----------------------------------

// #12 Call back HELLLLLLLLL aka Pyramid of Helllllll aka hard to read, no good, no bueno

// Nested callbacks that are stacked below one another. Its hard to read, and maintain.

// ----------------------------------

// #13 Promise
// Oh! See line 167- + The three states include:
// - pending - initial state
// - fufilled - SUCCESS
// - rejected - BOO FAILED

// ----------------------------------

// #14 Async + Await
//  Async - allows us to use this keyword with a function declaration
// Await- can only be used with async and in the body of a function. This is the magic that gives us an update of our state.

// ----------------------------------
// #15
const fetch = require("node-fetch");

const fetchRickAndMorty = async () => {
  try {
    const [results] = await Promise.all([
      fetch("https://rickandmortyapi.com/api/character"),
    ]);

    const [rickandmortyapi] = await Promise.all([results.json()]);
    const name = rickandmortyapi.results.map((item) => item.name);

    console.log(name);
  } catch (err) {
    console.log(err);
  }
};

// console.log(fetchRickAndMorty());

const fetchMultipleAPIs = async () => {
  try {
    const [rickAndMortyResults, randomUserResults] = await Promise.all([
      fetch("https://rickandmortyapi.com/api/character/2"),
      fetch("https://randomuser.me/api/?results=1"),
    ]);

    const [rickAndMorty, randomUser] = await Promise.all([
      rickAndMortyResults.json(),
      randomUserResults.json(),
    ]);

    const rickAndMortyName = rickAndMorty.name;
    const rickandMortyAndRandomUserName = randomUser.results.map(
      (item) => `${rickAndMortyName}, ${item.name.first}  ${item.name.last}`
    );
    console.log(rickandMortyAndRandomUserName);
  } catch (err) {
    console.log(err);
  }
};

console.log(fetchMultipleAPIs());

// ----------------------------------
// #16

class Shape {
  constructor(names, sides, sideLength) {
    this.names = names;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    return this.sides * this.sideLength;
  }
}

const square = new Shape("square", 4, 5);
console.log("square", square.calcPerimeter());

const triange = new Shape("triange", 3, 3);
console.log("triangle", triange.calcPerimeter());

// ----------------------------------
// #17

class Square extends Shape {
  constructor(names, sides, sideLength) {
    super(names, sides, sideLength);
    this.names = "square";
    this.sides = 4;
    this.sideLength = sideLength;
  }

  calcArea() {
    return this.sides * this.sideLength;
  }
}

let test1 = new Square("testing", 9, 4);
console.log("calc Area", test1.calcArea());
console.log("permimeter", test1.calcPerimeter());
console.log(test1);
