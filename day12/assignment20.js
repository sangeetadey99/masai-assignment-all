// Question 1: Closure-Based Counter Implementation:-
// Closures help a function "remember" variables even after the
//     outer function has finished running.

//     In this problem:
//     - We create a function "createCounter".
//     - Inside it, we make a variable "count".
//     - This "count" is PRIVATE — no one outside can change it.

//     The function returns an object with 3 functions:
//         - increment() → increases count
//         - decrement() → decreases count
//         - display() → shows the current count

//     These inner functions can still access "count" because of
//     CLOSURES. They "remember" the variable.

//     If we create two counters:
//         const c1 = createCounter();
//         const c2 = createCounter();

//     Each of them gets its OWN separate "count".
//     Changing c1 will NOT affect c2.

function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log("Current count:", count);
    },
    decrement: function () {
      count--;
      console.log("Current count:", count);
    },
    display: function () {
      console.log("Current count:", count);
    },
  };
}
const counter = createCounter();
counter.increment(); // Current count: 1
counter.increment(); // Current count: 2
counter.decrement(); // Current count: 1
counter.display(); // Current count: 1

const counterA = createCounter();
const counterB = createCounter();
counterA.increment(); // Current count: 1
counterA.increment(); // Current count: 2
counterB.increment(); // Current count: 1
counterB.decrement(); // Current count: 0
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Question 2: Simulating Private Variables with Closures:-

function createBankAccount() {
  let balance = 0;
  let transactionHistory = [];

  return {
    deposit: function (amount) {
      balance += amount;
      transactionHistory.push(`Deposited: ${amount}`);
      console.log(`Deposited: ${amount}`);
    },

    withdraw: function (amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
        transactionHistory.push(`Failed withdrawal: ${amount}`);
      } else {
        balance -= amount;
        console.log(`Withdrawn: ${amount}`);
        transactionHistory.push(`Withdrawn: ${amount}`);
      }
    },

    checkBalance: function () {
      console.log(`Current balance: ${balance}`);
      return balance;
    },

    getHistory: function () {
      console.log("Transaction History:", transactionHistory);
      return transactionHistory;
    },
  };
}

const account = createBankAccount();

account.deposit(500);
account.withdraw(200);
account.withdraw(400);

console.log(account.balance);

account.checkBalance();
account.getHistory();
