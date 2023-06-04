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