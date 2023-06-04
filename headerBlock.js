function renderHeaderBlock() {
    const topNavBar = document.createElement("nav");
    const topNavBarSection1 = document.createElement("header");
    //topNavBarSection1.textContent = "Sort:";
    const topNavBarSection2 = document.createElement("body");
    //fill in topNaveBarSection1
    const leftSection1 = document.createElement("span");
    const rightSection1 = document.createElement("span");
    //fill in right and left section1
    const aboutInformation = document.createElement("button");
    aboutInformation.textContent = ("About");
    aboutInformation.className = ("aboutButton");

    aboutInformation.addEventListener('click', function () {
        content.remove(newBookBody, bookshelfDiv);

        const aboutBody = document.createElement("p");
        aboutBody.textContent = ("Gollum, originally named Sméagol (or Trahald), was at first a Stoor, one of the three early Hobbit-types. The name Gollum was derived from the sound of his gurgling, choking cough. His life extended far beyond his nature, by the effects of possessing the One Ring. Sméagol was about 589 years old when he died, a remarkable age for a creature that was once a Hobbit, but he had been deformed and twisted in body and mind by the corruption of the Ring. His chief desire was to repossess the Ring that had enslaved him, and he pursued it for many years after Bilbo Baggins found it in Gollum's cave within the Misty Mountains. Inadvertently, Gollum would play a vital role in the ultimate Quest of the Ring.");

        content.append(aboutBody);
    });

    // const addBook = document.createElement("button");
    // addBook.textContent = "Add Book";
    const filter = document.createElement("button")
    filter.textContent = "Filter";
    const alphabet = document.createElement("button");
    alphabet.textContent = "A-Z";

    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";

    //append all the section1 items
    // filter.append(alphabet)
    leftSection1.append(aboutInformation);
    rightSection1.append(filter, homeButton);
    topNavBarSection1.append(leftSection1, rightSection1);

    //fill in topNavBarSeciton2
    const leftSection2 = document.createElement("span");
    const rightSection2 = document.createElement("span");
    //fill in right and left seciton2
    const titleImageIconName = document.createElement("h1");
    titleImageIconName.textContent = "Haru Books";

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
    // Object.assign(content.style, contentStyle);
    // Object.assign(titleImageIconName.style, titleImageIconNameStyle)
    Object.assign(topNavBar.style, topNavBarStyle);
    Object.assign(topNavBarSection1.style, section1Style);
    Object.assign(topNavBarSection2.style, section2Style);
    // content.append(topNavBar);
    //style my footer
    // const verticalFooterStyle = {
    //     border: "6px ridge #1c6EA4",
    //     //     webkitBoxShadow: "0px 0px 0px 0px rgba(0,0,0,0.63)",
    //     //     boxShadow: "6px 6px 12px 0px rgba(0, 0, 0, 0.63)",
    //     //     background: "#34E4EA",
    //     //     width: "100%",
    //     //     position: "fixed",
    //     //     bottom: "10px",
    // }
    // Object.assign(verticalLeftFooter.style, verticalFooterStyle);
    // verticalLeftFooter.append(twitterLink)//formatted for more additions later

    // footerNavBar.append(verticalLeftFooter, horisontalFooterNavbar);
    // content.append(footerNavBar);
    return topNavBar
}