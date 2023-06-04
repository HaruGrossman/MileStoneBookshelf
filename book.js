class Book {
    constructor(book) {
        this.author = book.author;
        this.language = book.language;
        this.subject = book.subject;
        this.title = book.title;
        this.note = "";
    }
    render() {
        const bookDiv = document.createElement("div");
        const bookTitle = document.createElement("p");
        bookTitle.textContent = this.title;
        //create comment Button
        const leaveCommentButton = document.createElement("button");
        leaveCommentButton.textContent = ("Leave Comment");

        const commentContainer = document.createElement("div");
        const commentbox = document.createElement("input");
        commentbox.textContent = ("Thoughts");
        const submittedCommentButton = document.createElement("button");
        submittedCommentButton.textContent = ("Save Thoughts");
        commentContainer.append(commentbox, leaveCommentButton);
        // submittedCommentButton.addEventListener("click", function () {})
        bookDiv.append(bookTitle, commentContainer);

        // function bookCommentSubmit() {
        //     Book.addComment({
        //         note: commentbox.value,
        //     })
        // }
        // submittedCommentButton.addEventListener('click', bookCommentSubmit);


        // style my bookDiv
        const bookDivStyle = {
            border: "6px solid #1c6EA4",
            boxShadow: "6px 6px 12px 0px rgba(0, 0, 0, 0.63)",
            background: "#0EB1D2",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        }
        Object.assign(bookDiv.style, bookDivStyle);

        return bookDiv;
    };
}
// newBookBox.append(authorInput, languageInput, subjectInput, titleInput, submitButton);
// function handleSubmit() {
//     bookshelf.addBook({
//         author: authorInput.value,
//         language: languageInput.value,
//         subject: subjectInput.value,
//         title: titleInput.value,
//     })
// }
// submitButton.addEventListener('click', handleSubmit);

// return newBookBox;