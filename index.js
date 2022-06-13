// console log

// console.log("hello world");
// console.warn("this is a warning");
// console.error("this is a error");
// ----------------------------------------------------
// Variables

// Three variables in javascript
// var,let,const

// const age = 30;
// age = 21
// console.log(age)
// ------------------------------------------------------
// Data types

// const name = 'arvind';
// const age = 20;
// const rating = 2.2;
// const value = null;
// const isCool = true;
// const defination = undefined;

// console.log(typeof(defination))
//------------------------------------------------------
// String Concatenaton
// two ways

// const name = "arvind";
// const age = 20;

// console.log("hello my name is " + name + "and i am " + age);
// console.log(`hello my name is ${name} and i am ${age}`)
// ------------------------------------------------
// String methods

// const name = "Arvind Batham";
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.substring(0,6).toUpperCase());
// console.log(name.split(' '));
//-------------------------------------------------------

// Array
/*const numbers = new Array(1,2,3,4,5,6); // one way to create Array
const fruit = new Array("Apple","Mango","Banana", true);
const randomValue = new Array(1,3,4,"mango");

const fruits = ["apple","banana","mango"]; // Second way to create Array
console.log(numbers[2]); // Accessing Elements of the Array

fruits[3] = "papaya";
fruits.push("mangos"); // for deleting the last element of the array
fruits.unshift("straberries"); // for adding element in the staring
fruits.pop();
console.log(Array.isArray(fruits)); // for checking the Array...is fruits is Array or not.
console.log(fruits.indexOf('banana')); // for cheking the index of the banana.
console.log(fruits)*/

// -------------------------------------------------------------------------------
/*// Object Literals

const person = {
  firstname: "Arvind",
  lastname: "Batham",
  age: 30,
  hobbies: ["music", "cricket", "dancing"],
  address: {
    colony: "ABC",
    district: "Gwalior",
    state: "Madhya Pradesh",
  },
};
console.log(person.hobbies[1]);
console.log(person.address.state);

person.email = "alex@gmal.com"; // adding email 
console.log(person.email);

const {
  firstname,
  lastname,
  address: { district },
} = person;
console.log(firstname, lastname, district);

// JSON (JavaScript object Notation)

const Person_json = JSON.stringify(person);
console.log(Person_json);*/

// -------------------------------------------------------------------------------

// Array of object literal
/*const todos = [
  {
    id: 1,
    text: "learnig javascript",
    isCompleted: false,
  },

  {
    id: 2,
    text: "meeting with friends",
    isCompleted: false,
  },
  {
    id: 3,
    text: "going to play",
    isCompleted: true,
  },
];

console.log(todos[1].text);*/

// ----------------------------------------------------

// for loop
/*
for (let i = 0; i < 10; i++) {
  //   console.log(`this is ${i}`);
}

const todos = [
  {
    id: 1,
    text: "learnig javascript",
    isCompleted: true,
  },

  {
    id: 2,
    text: "meeting with friends",
    isCompleted: false,
  },
  {
    id: 3,
    text: "going to play",
    isCompleted: true,
  },
];

  for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text)
  }

  for(let todo of todos){
    console.log(todo.text)
  }

// foreach, map, filter

todos.forEach(function (todo) {
  console.log(todo.text);
});

let todoNewArray = todos.map(function (todo) {
  return todo.text;
});

console.log(todoNewArray);

let todo_NewArray = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todo_NewArray);

let p = 0;
while(p < 10){
    console.log(p)
    p++;
}
*/
// ----------------------------------------------------------

// Ternary Operator
/*
let x = 11;
let color = x > 10 ? "blue" : "red";
console.log(color) */

// ----------------------------------------------------------

// Switch Case
/*
let x = 11;
let color = x > 10 ? "blue" : "red";

switch (color) {
  case "blue":
    console.log("color is blue");
    break;
  case "red":
    console.log("color is red");
    break;
  default:
    console.log("No color match");
}
*/

// -------------------------------------------------------------

// Function
/*
function addNums(n1, n2) {
  console.log(n1 + n2);
}

addNums(5, 5);

we can aslo set the default parameters
function addNums(n1 = 1, n2 = 1) {
  return n1 + n2;
}

console.log(addNums());

Arrow Function

const addNums = (n1,n2) => {
  console.log(n1 + n2);
};

addNums(5, 6);

todos.forEach((todo) => {
  todo.text;
});
*/
// -----------------------------------------------------------------

// Class(object oriented programming)

// class Person {
//   constructor(firstname, lastname, dob) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = new Date(dob);
//   }

//   getFullName() {
//     return `${this.firstname} ${this.lastname}`;
//   }

//   getBirthYear() {
//     return this.dob.getFullYear();
//   }
// }

// const person1 = new Person("Arvind", "Batham", "1-1-2001");
// const person2 = new Person("Alex", "Anonymous", "2-2-2002");
// console.log(person1.getBirthYear());
// console.log(person2.getFullName());
