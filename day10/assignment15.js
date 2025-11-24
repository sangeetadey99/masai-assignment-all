//a) Create a variable username and course and print: "Hello , welcome to the course!" using template literals.
const username = "Sam";
const course = "JavaScript";
console.log(`Hello ${username}, welcome to the ${course} course!`);

//b) Convert the below object into shorthand syntax:
// const name = "Sam";
// const age = 21;
// const student = {
//   name: name,
//   age: age,
//   greet: function () {
//     console.log("Hello");
//   }
// };

const name = "Sam";
const age = 21;
const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  },
};

console.log(student);
student.greet();

//c) Create a function getFullName(first, last) using arrow function shorthand (no return keyword).
const getFullName = (first, last) => `${first} ${last}`;
console.log(getFullName("Sam", "Smith"));
