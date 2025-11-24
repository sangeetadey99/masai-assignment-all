// 1. Template Literals + Expressions
// a) Print: "5 + 7 = 12" using a template literal where the result is calculated inside ${ }.
console.log(`5 + 7 = ${5 + 7}`);

// b) Create a multi-line string using template literals (3 lines).
const multiLine = `This is line one.
This is line two.
This is line three.`;
console.log(multiLine);

// c) Given firstName = "John" and lastName = "Doe", print the full name using a template literal.
const firstName = "John";
const lastName = "Doe";
console.log(`Full name: ${firstName} ${lastName}`);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Arrow Functions & this
// a) Convert this function into an arrow function:
// function square(n) {
//   return n * n;
// }
const square = (n) => n * n;
console.log(square(4));

// b) Explain why the following logs undefined:
// const obj = {
//   value: 50,
//   test: () => console.log(this.value)
// };
// obj.test();

// Explanation:-
// The arrow function does not have its own 'this' context; it inherits 'this' from the surrounding scope,
//  which is not the object itself. Hence, 'this.value' is undefined.

// c) Rewrite it using a normal function so that printing works.
const object = {
  value: 50,
  test: function () {
    console.log(this.value);
  },
};
object.test();
const object2 = {
  value: 99,
  test() {
    console.log(this.value);
  },
};
object2.test();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Rest, Spread & Copying Objects
// a) Use spread to make a shallow copy of this object:
// const product = { name: "Pen", price: 10 };
const product = { name: "pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);

// b) Merge these two objects using spread:
const a = { x: 1 };
const b = { y: 2 };
const mergeObj = { ...a, ...b };
console.log(mergeObj);

// c) Write a function maxValue(...nums) (rest operator) that returns the largest number.
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(10, 50, 7, 99));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Destructuring & Optional Chaining
// a) Destructure to extract a and b:
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1);
console.log(b1);

// b) Destructure the object to extract brand:
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

// c) Safely access the following using optional chaining:
// Expected output: undefined (not an error)
const info = {};
console.log(info.user?.email);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5. Scoping (let/var/const)
// a) What will this print?
for (var i = 0; i < 3; i++) {}
console.log(i);
// Explanation: It will print 3 because 'var' is function-scoped, so 'i' is accessible outside the loop.

// b) What will this print?
for (let j = 0; j < 3; j++) {}
console.log(j);
// Explanation: It will throw a ReferenceError because 'let' is block-scoped, so 'j' is not accessible outside the loop.

// c) Why is const used for values that should not be reassigned?
// Explanation: "const" prevents reassignment. It ensures that the variable always reference to the same value.
// improving code safety and avoiding accidental changes.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Ternary Operator – Practice
// a) Convert this to a ternary:
// let speed;
// if (kmph > 60) {
//   speed = "Fast";
// } else {
//   speed = "Normal";
// }
let speed = kmph > 60 ? "fast" : "Normal";
console.log(speed);
// b) Write a ternary that prints "Adult" if age ≥ 18, else "Minor".
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);

// c) Write a ternary to check: Positive → "Positive" Zero → "Zero" Negative → "Negative" (Hint: use nested ternary)
let result = number > 0 ? "Positive" : number === 0 ? "Zero" : "Negative";
console.log(result);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 7. Spread, Rest & Arrays
// a) Add elements 4, 5 to this array using spread:
const nums = [1, 2, 3];
const newNum = [...nums, 4, 5];
console.log(newNum);

// b) Combine these arrays using spread:
a = ["x", "y"];
b = ["z"];
const combined = [...a, ...b];
console.log(combined);

// c) Write a function using rest: printNames("A","B","C") → returns ["A","B","C"].
const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
