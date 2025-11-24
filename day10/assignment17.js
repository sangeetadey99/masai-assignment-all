//a) Use spread operator to merge:
arr1 = [1, 2, 3];
arr2 = [4, 5];
const merge = [...arr1, ...arr2];
console.log(merge);

//b) Create a function sum(...nums) using rest operator that returns the sum of all numbers.
const sum = (...nums) => {
  return nums.reduce((acc, el) => acc + el, 0);
};
console.log(sum(1, 2, 3, 4, 5));

//c) Given:
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001,
  },
};
const {
  name,
  address: { city, pin },
} = user;
console.log(name);
console.log(city);
console.log(pin);
