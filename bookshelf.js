function Bookshelf(books = []) {
    this.books = books;

    this.addBook = function (book) {
        this.books.push(book);
    };

    this.render = function () {
        const ul = document.createElement("ul");
        for (const book of this.books) {
            ul.append(book.render());
        }
        return ul;
    };
};

// const ul = document.querySelector("Bookshelf");

// class Bookshelf {
//     constructor(book = []) {
//         this.books = books;
//     }
// };