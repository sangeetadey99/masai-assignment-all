// Q1. Create a Bank Account (Using Closures for Private State)

function createBankAccount(startAmount = 0) {
  let balance = startAmount;
  let history = [];

  function deposit(amount) {
    if (amount <= 0) {
      return "Amount must be greater then Zero";
    }
    balance += amount;
    history.push("Deposited: " + amount);
    return "Deposit successful";
  }
  function withdraw(amount) {
    if (amount <= 0) {
      return "Amount must be greater then zero";
    }
    if (amount > balance) {
      return "Not enough balance";
    }
    balance -= amount;
    history.push("withdrawn: " + amount);
    return "Withdrawal successful";
  }
  function getBalance() {
    return balance;
  }
  function getTransactionHistory() {
    return history;
  }
  return {
    deposit,
    withdraw,
    getBalance,
    getTransactionHistory,
  };
}

// Q2. Build a Rate Limiter (Closure + Timers)

function createRateLimiter(limit, timeInMs) {
  let counter = 0;
  setInterval(function () {
    counter = 0;
  }, timeInMs);
  return function () {
    if (counter < limit) {
      counter++;
      return "Allowed";
    } else {
      return "Limit reached";
    }
  };
}

// Q3. Implement setInterval Using setTimeout

function mySetTnterval(callback, delay) {
  let timerId;
  let active = true;
  function repeat() {
    if (!active) return;
    callback();
    timerId = setTimeout(repeat, delay);
  }
  timerId = setTimeout(repeat, delay);
  return {
    stop: function () {
      active = false;
      clearTimeout(timerId);
    },
  };
}

// Q4. Implement a Sequential Task Runner (Using Timers + Promises)

function wait(ms){
    return new Promise(function (resolve){
        setTimeout(resolve,ms);
    });
}
async function runSequential(task, delayTime){
    let result = [];
    for(let task of tasks){
        try{
            let value = await task();
            results.push(value);
            await wait(delayTime);
        }catch(error){
            return "Stopped due to error: ";
        }
    }
    return results;
}
