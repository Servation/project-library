let myLibrary = [];
let bookCounter = 0;

function Book(title, author, read, bookID) {
    this.title = title
    this.author = author
    this.read = read
    this.bookID = bookID
}

Book.prototype.toggleRead = function () {
    if (this.read == true) {
        this.read = false;
    } else {
        this.read = true;
    }
}

function addBookToLibrary() {
    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let bookRead = document.getElementById("hasRead").checked;
    let bookObj = new Book(bookTitle, bookAuthor, bookRead, bookCounter);
    myLibrary.push(bookObj);
    bookCounter++;
    showLibrary()
}

function showLibrary() {
    let bookLib = document.getElementById("theLibrary")
    while (bookLib.firstChild) {
        bookLib.removeChild(bookLib.lastChild);
    }
    myLibrary.forEach(el => {
        let book = document.createElement("div");
        book.setAttribute('id', el.bookID);
        let title = document.createElement("h2");
        let author = document.createElement("h3");
        let read = document.createElement("p");
        title.textContent = "Title: " + el.title;
        author.textContent = "Author: " + el.author;
        read.textContent = "Read: " + el.read;
        bookLib.appendChild(book);
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(read);
    });
}