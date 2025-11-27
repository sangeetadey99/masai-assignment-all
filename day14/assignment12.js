function timer(duration, onComplete) {
  setTimeout(function () {
    let message = `Timer of ${duration} ms finished.`;
    onComplete(message);
  }, duration);
}
timer(2000, function (result) {
  console.log(result);
});
