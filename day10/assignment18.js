//a) What is the output?
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y); // 20
console.log(x); // refrence error: X is not defined

//b) Access the following safely using optional chaining:
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile.user?.details?.email);
console.log(profile.user?.address?.phone); 

//c) Create an example where optional chaining prevents a runtime error when accessing a missing nested property.
const student = {
    name: "Rahul",
};
console.log(student.address?.city);