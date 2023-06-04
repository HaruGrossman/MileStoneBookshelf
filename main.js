const topNavBar = renderHeaderBlock(); //can call out header for milti pages
const content = document.getElementById('content'); // Main body page//
bookshelf.render();
const newBookBody = createNewBookInput();
content.append(topNavBar, newBookBody, bookshelfDiv);

// const aboutbutton = document.getElementsByClassName(".aboutButton");

// aboutbutton.addEventListener('click', function () {
//     content.remove(newBookBody, bookshelfDiv);

//     const aboutBody = document.createElement("p");
//     aboutBody.textContent = ("Gollum, originally named Sméagol (or Trahald), was at first a Stoor, one of the three early Hobbit-types. The name Gollum was derived from the sound of his gurgling, choking cough. His life extended far beyond his nature, by the effects of possessing the One Ring. Sméagol was about 589 years old when he died, a remarkable age for a creature that was once a Hobbit, but he had been deformed and twisted in body and mind by the corruption of the Ring. His chief desire was to repossess the Ring that had enslaved him, and he pursued it for many years after Bilbo Baggins found it in Gollum's cave within the Misty Mountains. Inadvertently, Gollum would play a vital role in the ultimate Quest of the Ring.");

//     content.append(aboutBody);
// });

//console.log(shownBookshelf)

// const showSubmittedComments = () => {a
//     let submittedComments = "<ul>";
//     submittedCommentsList.forEach(submition => {
//         list += `<li> ${submition} </li>`;
//     })
//     list += "</ul>";
//     submition.innerHTML = list;
// }

//need a funciton to clear my text block after sendComment has be pushed
// function clearCommentButton() => {
//     openField.remove(value)
// }

// sendComment pushes the text from my textarea to my open array for submittedCommmentsList
// sendComment.addEventListener('click', function () {
//     event.preventDefault();
//     submittedCommentsList.push(openField.value);
//     commentContainer.append(submittedCommentsList);
//     openField.value = ("More Thoughts");
// })

//subbutton opens up my commentbox after click
// subButton.addEventListener('click', function () {
//     commentContainer.append(openField, sendComment);
//     subButton.remove();
// if (openField.length > 0) {
//     submittedCommentsList.push(openField[0]);
//     // showSubmittedComments();
//     // openField.value = "";
// }
// console.log(submittedCommentsList);
// return submittedCommentsList;
// })

// commentContainer.append(submittedComments);
// commentContainer.appendChild(subButton);
// content.append(commentContainer);

// console.log(commentContainer);

// alternate Assessment requirements//

// TDD 1 Alternate: add a function to your application that uses a `for` loop to count the number of books on the bookshelf and have a visible counter on the screen
// TDD 2 Alternate: `reduce` is used to implement a counter on the page of the number of non-English books in the collection 
// TDD 3 Alternate: there is a DOM element that indicates the average number of subjects per Book in the Bookshelf. 
// TDD 4 Alternate: add two properties to the Book class: `numPages` and `category`. Randomly generate a number of pages for each book. If the book has more than 100 pages, its category is "novel". Otherwise, its category is "short story".
// TDD 5 Alternate: use the `filter` method on search terms so that the word "THE" doesn't affect any search term outcomes

// Optional: Registration//

// Users should not be able to access the book data unless they have registered a new username and password combination. 
// After registering, users should be redirected to the Bookshelf Web App where they can see the book data, add books to the bookshelf, etc.
// These credentials do not need to be stored in a database and encrypted for sign in later. This is just an exercise to get us closer to real world web applications. 

//

// let bookshelf = [];

// Load in book data
// function renderBookShelf() {
//     for (const bookData of BookData) {
//         const book = new Book(
//             bookData.author,
//             bookData.language,
//             bookData.subject,
//             bookData.title
//         );
//         bookshelf.addBook(book);
//     }
//     content.append(bookshelf.render());
// }
// renderBookShelf();

// function renderBookShelfAtoZ() { };

// function renderBookShelfZtoA() { };

// function renderBookShelfAuthor() { };

// console.log(content);

//Load in book data
// your render will be appended to html in here
// const searchBtn = document.querySelector("#SearchText1");
// const arrAZTitle = document.getElementById("arrangeA-Z_Title");
// const arrAZAuthor = document.getElementById("arrangeA-Z_Author");
// const fav = document.getElementById("Favorites");
// const subject = document.getElementById("Subject");
// const searchButton = document.getElementById("#Search");

// sortAZ.addEventListener('click', () => {
//     bookshelf.sort(function (a, b) {
//         if (a.title < b.title) {
//             return -1;
//         }
//         if (a.title > b.title) {
//             return 1;
//         }
//         return 0;
//     });
//     console.log(bookshelf)
//     content.replaceChildren(...sortAZ);
// })
// function renderAZT(array) {
//     const arrAZT = bookshelf.map(b[0] - a[0]);
//     console.log(arrAZT);
// };
// renderAZT(bookshelf);
// content.replaceChildren(...sortAZ);
// });

// sortZA.addEventListener('click', () => {
//     function renderZAT(array) {
//         const arrZAT = array.map(bookshelf);
//         console.log(arrZAT);
//         // ul.appendChild(renderAZAuthor)
//     };
//     renderZAT(bookshelf);
//     ul.replaceChildren(...arrAZT);
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
