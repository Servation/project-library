let myLibrary = [];
let bookCounter = 0;

class Book {
    constructor(title, author, pages, read, bookID) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.bookID = bookID
    }
    toggleRead() {
        if (this.read == true) {
            this.read = false;
        } else {
            this.read = true
        }
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
        let title = document.createElement("div");
        let author = document.createElement("div");
        let pages = document.createElement("div");
        let readButton = document.createElement("button");
        let deleteButton = document.createElement("button");
        book.setAttribute('id', el.bookID);
        book.setAttribute("class", "individualBook");
        title.textContent = "Title: " + el.title;
        author.textContent = "Author: " + el.author;
        pages.textContent = "Pages: " + el.pages;
        deleteButton.textContent = "DELETE";
        if (el.read) {
            readButton.style.backgroundColor = "LightGreen";
            readButton.textContent = "READ";
        } else {
            readButton.style.backgroundColor = "Crimson";
            readButton.textContent = "NOT READ";
        }
        deleteButton.addEventListener("click", function () {
            myLibrary = myLibrary.filter(function (obj) {
                return obj.bookID !== el.bookID;
            });
            showLibrary();
        });
        readButton.addEventListener("click", function () {
            el.toggleRead();
            showLibrary();
        });
        bookLib.appendChild(book);
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(readButton);
        book.appendChild(deleteButton);
    });
}