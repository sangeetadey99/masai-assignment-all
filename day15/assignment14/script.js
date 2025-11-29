
//1: Wrong ID used (#massage).Correct selector should target #message.
const para = document.querySelector("#message");


//2: Wrong DOM method used (getElementByName).Correct method is getElementById.
const textButton = document.getElementById("textButton");


//3: Wrong event listener method (addClickEventlistener).Correct spelling is addEventListener.

textButton.addEventListener("click", () => {
  // FIX #4: Wrong property used: contentText.Correct property is textContent.
  para.textContent = "New Message";
});

const box = document.getElementById("box");
const colorButton = document.getElementById("colorButton");

//5: Event listener method spelled correctly (same issue as before).
colorButton.addEventListener("click", () => {

  // FIX #6: Typo in 'style' (original: styl).Correct: box.style.backgroundColor
  box.style.backgroundColor = "blue";
});
