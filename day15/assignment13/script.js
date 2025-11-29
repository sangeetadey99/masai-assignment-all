const colorInput = document.getElementById("colorInput");
const textInput = document.getElementById("textInput");

const bgBtn = document.getElementById("bgBtn");
const textBtn = document.getElementById("textBtn");

const box = document.getElementById("box");

bgBtn.addEventListener("click", function () {
  const chosenColor = colorInput.value.trim();

  if (chosenColor === "") {
    alert("Please enter a color name!");
    return;
  }

  box.style.backgroundColor = chosenColor;

  if (box.style.backgroundColor === "") {
    alert("Invalid color name!");
  }
});

textBtn.addEventListener("click", function () {
  const userText = textInput.value.trim();

  if (userText === "") {
    alert("Please enter some text!");
    return;
  }

  box.textContent = userText;
});
