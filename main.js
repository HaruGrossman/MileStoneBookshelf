const content = document.querySelector('#content'); // Main body page//
const bookshelf = new Bookshelf();

// create nav bar//
//// A Navigation Bar is included in the web app with links to other parts of the site e.g. "About", "Contact". 
////No real information is required. Dummy data or lorum ipsum is fine!
const topNavBar = document.createElement("nav"); //big box

const topNavBarSection1 = document.createElement("header");
const topNavBarSection2 = document.createElement("body");
//fill in section1
const leftSection1 = document.createElement("span");
const rightSection1 = document.createElement("span");
//fill in right and left section1
const logIn = document.createElement("button");
logIn.textContent = "Log In";
const home = document.createElement("button");
home.textContent = "Home";
const hoursAndLocations = document.createElement("button");
hoursAndLocations.textContent = "Hours & Locations";
const helpButton = document.createElement("button");
helpButton.textContent = "Help";
//append all the section1 items
leftSection1.append(logIn, home);
rightSection1.append(hoursAndLocations, helpButton);
topNavBarSection1.append(leftSection1, rightSection1);

//fill in seciton2
const leftSection2 = document.createElement("span");
const rightSection2 = document.createElement("span");
//fill in right and left seciton2
const titleImageIconName = document.createElement("img");

titleImageIconName.src = "BusinessIconOption2.png";
//titleImageIconName.style = BusinessIcon.png;
const searchbox = document.createElement("input")
searchbox.placeholder = "Type Here";
const search = document.createElement("button");
search.textContent = "🔎";
//append all the section2 items
leftSection2.append(titleImageIconName);
rightSection2.append(searchbox, search);
topNavBarSection2.append(leftSection2, rightSection2);


//"about" tab/button that will lead to second page

topNavBar.append(topNavBarSection1, topNavBarSection2);
content.append(topNavBar)
//now for a little style
const topNavBarStyle = {
    border: "6px ridge #1c6EA4",
    webkitBoxShadow: "0px 0px 0px 0px rgba(0,0,0,0.63)",
    boxShadow: "6px 6px 12px 0px rgba(0, 0, 0, 0.63)",
    background: "white",
    width: "100%",
    // marginTop: "2px",
    position: "fixed",
    // justifyContent: "space-evenly",
    // alignItems: "center",
    // alignContent: "center",
    // background: 
}
const section1Style = {
    // display: "flex",
    // flex: "flex-wrap",
    // width: "100%",
    // justifyContent: "space-evenly",
    // alignItems: "center",
    // alignContent: "center",
}
const section2Style = {
    // display: "flex",
    // flex: "flex-wrap",
    // width: "100%",
    // justifyContent: "right",
    // alignItems: "center",
    // alignContent: "center",
}
const contentStyle = {
    border: "0",
    padding: "0",
}

////for button styling
// .myButton {
// color: rgb(255, 255, 255); font-size: 20px; line-height: 20px; padding: 20px; border-radius: 0px; font-family: Georgia, serif; font-weight: normal; text-decoration: none; font-style: normal; font-variant: normal; text-transform: none; background-image: linear-gradient(to right, rgb(28, 110, 164) 0%, rgb(35, 136, 203) 50%, rgb(20, 78, 117) 100%); box-shadow: rgba(0, 0, 0, 0.63) 6px 6px 12px 0px; border: 2px solid rgb(28, 110, 164); display: inline-block;}
// .myButton:hover {
// background: #1C6EA4; }
// .myButton:active {
// background: #144E75; }

////for my word styling
// font-family: Georgia, serif;
// font-size: 18px;
// letter-spacing: 1px;
// word-spacing: 1px;
// color: #000000;
// font-weight: normal;
// text-decoration: none;
// font-style: normal;
// font-variant: normal;
// text-transform: none;

Object.assign(content.style, contentStyle)
Object.assign(topNavBar.style, topNavBarStyle)
Object.assign(topNavBarSection1.style, section1Style)
Object.assign(topNavBarSection2.style, section2Style)

// create footer//
//footernavbar 2 sections
///leftverticalnavbar with icon links
///horisontalfooternavbar with listed items below:
////"contact" list and information
////services
//// FAQ
//// about the library
//// language
//
const footerNavBAr = document.createElement("footer");



// add Books//

// Users can enter book title, author, subjects, language and add new Books.
// The Bookshelf instance is updated accordingly.
// The Bookshelf instance renders Books accurately.

//Comments//

//Users can leave comments no longer than 280 characters on any Book they want. 
// Users can press a "Comment" button which reveals a `text` input element.
// Users can then type their comment and click "send" to add it to the Book.
// Comments should be represented by HTML elements on the page.
// The Book and Bookshelf instances are updated accordingly.
// The comments persist even if a search or sort rerenders the Books.
// Data can be stored locally or in state memory. A database is not required. 

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
for (const bookData of BookData) {
    const book = new Book(
        bookData.author,
        bookData.language,
        bookData.subject,
        bookData.title
    );
    bookshelf.addBook(book);
}

content.append(bookshelf.render());
console.log(content);


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