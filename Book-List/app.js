// Book Construtor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
// UI Constructor
function UI() {}

// Event Listeners
document.getElementById("book-form").addEventListener("submit", function (e) {
  // Get form values
  const title = doucument.getElementById("title").value;
  const author = doucument.getElementById("author").value;
  const isbn = doucument.getElementById("isbn").value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  console.log(book);

  e.preventDefault();
});
