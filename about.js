const topNavBar = renderHeaderBlock();
const content = document.getElementById("#content");

aboutInformation.addEventListener("click", aboutInformationPage);

function aboutInformationPage() {
    aboutInformation.addEventListener('click', function () {
        content.remove(newBookBody, bookshelfDiv);
        content.append(aboutBody);
    });

    const aboutBody = document.createElement("p");
    aboutBody.textContent = ("Gollum, originally named Sméagol (or Trahald), was at first a Stoor, one of the three early Hobbit-types. The name Gollum was derived from the sound of his gurgling, choking cough. His life extended far beyond his nature, by the effects of possessing the One Ring. Sméagol was about 589 years old when he died, a remarkable age for a creature that was once a Hobbit, but he had been deformed and twisted in body and mind by the corruption of the Ring. His chief desire was to repossess the Ring that had enslaved him, and he pursued it for many years after Bilbo Baggins found it in Gollum's cave within the Misty Mountains. Inadvertently, Gollum would play a vital role in the ultimate Quest of the Ring.");
}
