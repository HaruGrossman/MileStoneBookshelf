const content = document.querySelector('#content'); // Main body page//
const bookshelf = new Bookshelf();
// create nav bar//
//// A Navigation Bar is included in the web app with links to other parts of the site e.g. "About", "Contact". 
////No real information is required. Dummy data or lorum ipsum is fine!
const topNavBar = document.createElement("nav"); //big box
const topNavBarSection1 = document.createElement("header");//smallerbox
//topNavBarSection1.textContent = "Sort:";
const topNavBarSection2 = document.createElement("body");//smallerbox
//fill in topNaveBarSection1
const leftSection1 = document.createElement("span");
const rightSection1 = document.createElement("span");
//fill in right and left section1
const sortAZ = document.createElement("button");
sortAZ.textContent = "A-Z";
const sortZA = document.createElement("button");
sortZA.textContent = "Z-A";
const filter = document.createElement("button")
// fi.onclick = funciton()
const menuList = ["A-Z", "Z-A", "Author"];
const choose = document.createElement("select");
// select.name = "sort";

// for (const value of menuList) {
// };

filter.textContent = "Filter";
const alphabet = document.createElement("button");
alphabet.textContent = "A-Z";

const helpButton = document.createElement("button");
helpButton.textContent = "Help";

//append all the section1 items

// filter.append(alphabet)
leftSection1.append(sortAZ, sortZA);
rightSection1.append(filter, helpButton);
topNavBarSection1.append(leftSection1, rightSection1);

//fill in topNavBarSeciton2
const leftSection2 = document.createElement("span");
const rightSection2 = document.createElement("span");
//fill in right and left seciton2
const titleImageIconName = document.createElement("h1");
//titleImageIconName.src = "Twitter-Logo.png.crdownload";
titleImageIconName.textContent = "Haru Books";
// titleImageIconName.src = "BookBusinessIcon.png";
// titleImageIconName.src = "BusinessIconVersion3.svg";
// titleImageIconName.src = "CompanyBook.svg";

const searchbox = document.createElement("input");
searchbox.placeholder = "Type Here";
const search = document.createElement("button");
search.textContent = "🔎";
//append all the section2 items

leftSection2.append(titleImageIconName);
rightSection2.append(searchbox, search);
topNavBarSection2.append(leftSection2, rightSection2);

//"about" tab/button that will lead to second page
topNavBar.append(topNavBarSection1, topNavBarSection2);


//now for a little style
const topNavBarStyle = {
    border: "6px ridge #1c6EA4",
    webkitBoxShadow: "0px 0px 0px 0px rgba(0,0,0,0.63)",
    boxShadow: "6px 6px 12px 0px rgba(0, 0, 0, 0.63)",
    background: "#34E4EA",
    width: "100%",
    position: "sticky",
    top: "0",
    // right: "2px",
    // left: "0px",
}
const section1Style = {
    display: "flex",
    flex: "flex-wrap",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
}
const section2Style = {
    display: "flex",
    flex: "flex-wrap",
    width: "100%",
    justifyContent: "right",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-between",
}
const contentStyle = {
    border: "0",
    padding: "0",
    backgroundColor: "#0EB1D2",
    justifyContent: "100%"
}
// const buttonStyle = {
//     backgroundColor: "#C8C2AE",
// }
// const titleImageIconNameStyle = {
//     height: "40px",
//     width: "40px",
// }


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

// Object.assign(bookshelf.style, bookshelfStyle);
// Object.assign(button.style, buttonStyle)
Object.assign(content.style, contentStyle);
// Object.assign(titleImageIconName.style, titleImageIconNameStyle)
Object.assign(topNavBar.style, topNavBarStyle);
Object.assign(topNavBarSection1.style, section1Style);
Object.assign(topNavBarSection2.style, section2Style);
content.append(topNavBar);
// create footer//  color: #34E4EA
//footernavbar 2 sections
///leftverticalnavbar with icon links
///horisontalfooternavbar with listed items below:
////"contact" list and information
////services
//// FAQ
//// about the library
//// language
//
const footerNavBar = document.createElement("nav");
const verticalLeftFooter = document.createElement("div");
const horisontalFooterNavbar = document.createElement("div");

//style my footer
const verticalFooterStyle = {
    border: "6px ridge #1c6EA4",
    //     webkitBoxShadow: "0px 0px 0px 0px rgba(0,0,0,0.63)",
    //     boxShadow: "6px 6px 12px 0px rgba(0, 0, 0, 0.63)",
    //     background: "#34E4EA",
    //     width: "100%",
    //     position: "fixed",
    //     bottom: "10px",
}
Object.assign(verticalLeftFooter.style, verticalFooterStyle);

// const twitterLink = document.getElementsByClassName("#TwitterBird");
// twitterLink.src = "Twitter-Logo.png.crdownload";
// const instagramLink = document.createElement("span");
// instagramLink.src = "instagramIcon.jpeg";
// const youtubeLink = document.createElement("span");

// verticalLeftFooter.append(twitterLink)//formatted for more additions later


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
const commentContainer = document.createElement("container");
const openField = document.createElement("input");
openField.placeholder = ("Tell us what you think");
// const saveField = openField.getAttribute("placeholder");
const subButton = document.createElement("button");
subButton.textContent = ("Leave Comment");
const clearCommentButton = document.createElement("button");
clearCommentButton.textContent = ("Clear");
const sendComment = document.createElement("button");
sendComment.textContent = ("Submit");
// const submittedComments = document.createElement("ul");
//store subbed comments
let submittedCommentsList = [];

const showSubmittedComments = () => {
    let submittedComments = "<ul>";
    submittedCommentsList.forEach(submition => {
        list += `<li> ${submition} </li>`;
    })
    list += "</ul>";
    submition.innerHTML = list;
}

//need a funciton to clear my text block after sendComment has be pushed
// function clearCommentButton() => {
//     openField.remove(value)
// }


// sendComment pushes the text from my textarea to my open array for submittedCommmentsList
sendComment.addEventListener('click', function () {
    event.preventDefault();
    submittedCommentsList.push(openField.value);
    commentContainer.append(submittedCommentsList);
    openField.value = ("More Thoughts");
})

//subbutton opens up my commentbox after click
subButton.addEventListener('click', function () {
    commentContainer.append(openField, sendComment);
    subButton.remove();
    // if (openField.length > 0) {
    //     submittedCommentsList.push(openField[0]);
    //     // showSubmittedComments();
    //     // openField.value = "";
    // }
    // console.log(submittedCommentsList);
    // return submittedCommentsList;
})

//commentContainer.append(submittedComments);
commentContainer.appendChild(subButton);
footerNavBar.append(commentContainer);

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

// console.log(content);

//Load in book data
// your render will be appended to html in here
// const searchBtn = document.querySelector("#SearchText1");
// const arrAZTitle = document.getElementById("arrangeA-Z_Title");
// const arrAZAuthor = document.getElementById("arrangeA-Z_Author");
// const fav = document.getElementById("Favorites");
// const subject = document.getElementById("Subject");
// const searchButton = document.getElementById("#Search");

sortAZ.addEventListener('click', () => {
    bookshelf.sort(function (a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
    console.log(bookshelf)
    content.replaceChildren(...sortAZ);
})
// function renderAZT(array) {
//     const arrAZT = bookshelf.map(b[0] - a[0]);
//     console.log(arrAZT);
// };
// renderAZT(bookshelf);
// content.replaceChildren(...sortAZ);
// });

sortZA.addEventListener('click', () => {
    function renderZAT(array) {
        const arrZAT = array.map(bookshelf);
        console.log(arrZAT);
        // ul.appendChild(renderAZAuthor)
    };
    renderZAT(bookshelf);
    ul.replaceChildren(...arrAZT);
});

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
footerNavBar.append(verticalLeftFooter, horisontalFooterNavbar);
content.append(footerNavBar);