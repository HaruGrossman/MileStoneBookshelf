function createNewBookInput() {
    const newBookBox = document.createElement("div");

    const authorInput = document.createElement("input");
    authorInput.placeholder = ("Author Name");
    const languageInput = document.createElement("input");
    languageInput.placeholder = ("Language");
    const subjectInput = document.createElement("input");
    subjectInput.placeholder = ("Subject Name");
    const titleInput = document.createElement("input");
    titleInput.placeholder = ("Title Name");
    const submitButton = document.createElement("button");
    submitButton.textContent = "Add Book";

    newBookBox.append(authorInput, languageInput, subjectInput, titleInput, submitButton);
    function handleSubmit() {
        bookshelf.addBook({
            author: authorInput.value,
            language: languageInput.value,
            subject: subjectInput.value,
            title: titleInput.value,
        })
    }
    submitButton.addEventListener('click', handleSubmit);

    return newBookBox;
}

// sendComment pushes the text from my textarea to my open array for submittedCommmentsList
// sendComment.addEventListener('click', function () {
//     event.preventDefault();
//     submittedCommentsList.push(openField.value);
//     commentContainer.append(submittedCommentsList);
//     openField.value = ("More Thoughts");
// })

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
