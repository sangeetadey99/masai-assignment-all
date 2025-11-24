//a) Write an arrow function isEven(n) that returns true if even, else false.
const isEven = n => n % 2 === 0;
const isEven2 = n =>(n%2 ===0? true : false);
console.log(isEven(4));
console.log(isEven2(5));

//b) Rewrite the following using a ternary operator:
// if (marks >= 35) {
//   result = "Pass";
// } else {
//   result = "Fail";
// }
const marks = 40;
const result = marks >= 35 ? "Pass" : "Fail";
console.log(result);

//c) Write an arrow function greet(name) that prints: "Hello, " If no name is passed, print "Guest" using the ternary operator.
const greet = (name) => {
    console.log(`Hello, ${name ? name : "Guest"}`);
};
greet("Rahul");
greet();