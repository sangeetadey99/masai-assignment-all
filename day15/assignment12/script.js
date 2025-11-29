const listRef = document.querySelector("#list");

const btnRef = document.getElementById("addItemBtn");

btnRef.addEventListener("click", function () {
  const li = document.createElement("li");
  li.textContent = "New Item";

  listRef.appendChild(li);

  const allListItems = listRef.querySelectorAll("li");

  allListItems.forEach((item, index) => {
    const position = index + 1;

    if (position % 2 !== 0) {
      item.style.color = "blue";
      item.style.fontWeight = "700";
      item.style.fontStyle = "normal";
    } else {
      item.style.color = "red";
      item.style.fontStyle = "italic";
      item.style.fontWeight = "400";
    }
  });
});
