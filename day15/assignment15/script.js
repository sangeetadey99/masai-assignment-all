const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  const text = input.value.trim();

  if (text === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = text;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.style.marginLeft = "10px";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "5px";

  completeBtn.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
    li.style.color = "gray";
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  list.appendChild(li);

  input.value = "";
});
