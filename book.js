function Book(author, language, subject, title) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;

    this.render = function () {
        const li = document.createElement("li");
        li.textContent = this.title;
        return li;
    };
}

// class Book {
//     constructor(data) {
//         this.author = data.author;
//         this.language = data.language;
//         this.subject = data.subject;
//         this.title = data.title;
//     }
//     render() {
//         //box the book goes inside of//
//         const section = document.createElement("section");
//         section.classList.add("book");
//         //title of book//
//         const title = document.createElement("h1");
//         title.textContent = this.title;
//         //aurthor of book//
//         const author = document.createElement("h2");
//         author.textContent = this.author;
//         //subject of book//
//         const subject = document.createElement("h3");
//         subject.textContent = this.subject;
//         //language of book//
//         const language = document.createElement("h4");
//         language.textContent = this.language;

//         const section2 = document.createElement("div");
//         // insert favorite button

//         section.append(title);
//         section2.append(author);
//         section2.append(subject);
//         section2.append(language);
//         section.append(section2);
//         const bookshelf = document.getElementsByClassName('Bookshelf')[0]
//         bookshelf.append(section)
//     }
// }
// bookData.map((eachBook) => {
//     const book = new Book(eachBook)
//     book.render()
// });