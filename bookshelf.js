const bookshelfDiv = document.createElement("div");

class Bookshelf {
    constructor(books) {
        this.books = books;
    }
    addBook(book) {
        this.books.push(book);
        const newBook = new Book(book);
        bookshelfDiv.appendChild(newBook.render());
    }
    render() {
        for (const book of this.books) {
            const newBook = new Book(book);
            bookshelfDiv.appendChild(newBook.render());
        }
    };
}
const bookshelf = new Bookshelf(BookData);

//Comments//
//Users can leave comments no longer than 280 characters on any Book they want. 
// Users can press a "Comment" button which reveals a `text` input element.
// Users can then type their comment and click "send" to add it to the Book.
// Comments should be represented by HTML elements on the page.
// The Book and Bookshelf instances are updated accordingly.
// The comments persist even if a search or sort rerenders the Books.
// Data can be stored locally or in state memory. A database is not required. 
// const commentContainer = document.createElement("container");
// const openField = document.createElement("input");
// openField.placeholder = ("Tell us what you think");
// // const saveField = openField.getAttribute("placeholder");
// const subButton = document.createElement("button");
// subButton.textContent = ("Leave Comment");
// const clearCommentButton = document.createElement("button");
// clearCommentButton.textContent = ("Clear");
// const sendComment = document.createElement("button");
// sendComment.textContent = ("Submit");
// // const submittedComments = document.createElement("ul");
// //store subbed comments
// let submittedCommentsList = [];


// const ul = document.querySelector("Bookshelf");
