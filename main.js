const content = document.querySelector('#content');
const bookshelf = new Bookshelf();

// Load in book data
for (const bookInfo of bookData) {
    const book = new Book(
        bookInfo.author,
        bookInfo.language,
        bookInfo.subject,
        bookInfo.title
    );
    bookshelf.addBook(book);
}

content.append(bookshelf.render());



//Load in book data
//your render will be appended to html in here
// const searchBtn = document.querySelector("#SearchText1");
// const arrAZTitle = document.getElementById("arrangeA-Z_Title");
// const arrAZAuthor = document.getElementById("arrangeA-Z_Author");
// const fav = document.getElementById("Favorites");
// const subject = document.getElementById("Subject");
// const searchButton = document.getElementById("#Search");

// arrAZTitle.addEventListener('click', () => {
//     function renderAZT(array) {
//         const arrAZT = arr.map(Bookshelf);
//         console.log(arrAZT);
//         // ul.appendChild(renderAZT);
//     };
//     renderAZT(Bookshelf);
//     ul.replaceChildren(...arrAZT);
// });
// arrAZAuthor.addEventListener('click', () => {
//     function renderAZAuthor(array) {
//         const arrAZAuthor = arr.map(Bookshelf);
//         console.log(arrAZAuthor);
//         // ul.appendChild(renderAZAuthor)
//     };
//     renderAZAuthor(Bookshelf);
//     ul.replaceChildren(...arrAZAuthor);
// });

// fav.addEventListener('click', () => {
//     function renderSortFavorite(array) {
//         const arrFavorite = arr.sort(Bookshelf);
//         console.log(arrFavorite);
//         // ul.appendChild(renderSortFavorite);
//     };
//     renderSortFavorite(Bookshelf);
//     ul.replaceChildren(...arrFavorite);
// });


// subject.addEventListener('click', () => {
//     function renderSortSubject(array) {
//         const arrSubject = arr.sort(Bookshelf);
//         console.log(arrSubject);
//         // ul.appendChild(renderSortSubject);
//     };
//     renderSortSubject(Bookshelf);
//     ul.replaceChildren(...arrSubject);
// });