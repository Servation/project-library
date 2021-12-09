let myLibrary = [];

function Book(title, author, read) {
    this.title = title
    this.author = author
    this.read = read
}

Book.prototype.toggleRead = function () {
    if (this.read == true) {
        this.read = false;
    } else {
        this.read = true;
    }
}

function addBookToLibrary() {

}