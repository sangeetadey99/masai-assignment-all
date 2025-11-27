function displayMessage(name) {
  console.log(`Hello, ${name}!`);
}
function getUserInput(callback) {
  setTimeout(function () {
    let username = "Alice";
    callback(username);
  }, 1000);
}
getUserInput(displayMessage);
