let myLibrary = [];
let bookCounter = 0;

function Book(title, author, pages, read, bookID) {
    this.title = title
    this.author = author
    this.pages = pages
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
    let bookPages = document.getElementById("pages").value;
    let bookRead = document.getElementById("hasRead").checked;
    let bookObj = new Book(bookTitle, bookAuthor, bookPages, bookRead, bookCounter);
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
        let pages = document.createElement("p");
        let read = document.createElement("p");
        let deleteButton = document.createElement("button");
        title.textContent = "Title: " + el.title;
        author.textContent = "Author: " + el.author;
        pages.textContent = "Pages: " + el.pages;
        read.textContent = "Read: " + el.read;
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            myLibrary = myLibrary.filter(function (obj) {
                return obj.bookID !== el.bookID;
            });
            showLibrary();
        });
        bookLib.appendChild(book);
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(read);
        book.appendChild(deleteButton);
    });
}