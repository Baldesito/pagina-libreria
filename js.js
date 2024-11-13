let allTheBooks = [];
let cart = [];

const getBooks = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        return response.json(); // .json() ritorna una Promise con dentro l'array dei libri!
      } else {
        throw new Error("Errore generico nella chiamata");
      }
    })
    .then((arrayOfBooks) => {
      console.log("arrayOfBooks", arrayOfBooks);
      const booksRow = document.getElementById("books-row");
      arrayOfBooks.forEach((book, i) => {
        allTheBooks = arrayOfBooks;
        const newCol = document.createElement("div");
        newCol.classList.add("col"); // ora è una col di bootstrap
        newCol.innerHTML = `
        <div class="card h-100">
            <img src="${book.img}" class="card-img-top" alt="book image">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">${book.price}£</a>
                <div>
                    <button class="btn btn-warning" onclick="remove(event)">SCARTA</button>
                    <button class="btn btn-success" onclick="addToCart(${i})">AGGIUNGI</button>
                </div>
            </div>
        </div>
        `;
        booksRow.appendChild(newCol);
      });
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
};
getBooks();
recreateCartFromLocalStorage();
