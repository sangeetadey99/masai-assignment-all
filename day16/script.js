let books = [];

const imgUrl = "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg";

const form = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");
const filter = document.getElementById("filter");
const sortAZ = document.getElementById("sortAZ");
const sortZA = document.getElementById("sortZA");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let book = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    category: document.getElementById("category").value,
    imageUrl: imgUrl,
  };

  books.push(book);
  displayBooks(books);

  form.reset();
});

function displayBooks(data) {
  bookList.innerHTML = "";

  data.forEach((book, index) => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${book.imageUrl}">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>${book.category}</p>
      <button class="deleteBtn" onclick="deleteBook(${index})">Delete</button>
    `;

    bookList.appendChild(card);
  });
}

function deleteBook(index) {
  books.splice(index, 1);
  displayBooks(books);
}

sortAZ.addEventListener("click", () => {
  books.sort((a, b) => a.title.localeCompare(b.title));
  displayBooks(books);
});

sortZA.addEventListener("click", () => {
  books.sort((a, b) => b.title.localeCompare(a.title));
  displayBooks(books);
});

filter.addEventListener("change", () => {
  if (filter.value === "All") {
    displayBooks(books);
  } else {
    let filtered = books.filter((b) => b.category === filter.value);
    displayBooks(filtered);
  }
});
