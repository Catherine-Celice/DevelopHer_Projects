


// Code removed from the createCard() function that made the front of the cards and the blank spaces for the cards.
// commented out code HERE is code tha remains in the orginal function


//function createCard(i, myObj){

    const card = document.createElement('div');       // In original function, but this will be needed when you create the front or an empty space.
    const face = document.createElement('div');
    //const back = document.createElement('div');
    const blankSpace = document.createElement('div');

    const faceImage = document.createElement('img');
    //const backImage = document.createElement('img');

    card.classList.add('card');
    face.classList.add('cardFace');
    // back.classList.add('cardBank');
    blankSpace.classList.add('cardEmpty');


    board.appendChild(card);
    card.appendChild(face);
    face.appendChild(faceImage);
    faceImage.src = myObj.faceImage;

    // card.appendChild(back);
    // back.appendChild(backImage);
    // backImage.src = myObj.backImage;
    
    card.appendChild(blankSpace);

    // card.setAttribute("showing", "back");
    // const pos = toString(i);
    // card.setAttribute("position", pos);


//} // end of createCard()



