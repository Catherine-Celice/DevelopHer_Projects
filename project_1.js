// Project 1
// Group 2
// Catherine Celice, Salena Galloway, and Heidi Youmans
// Memory Game
// August 2021

// licence information for images

// create an array to hold the images

// notes for us - delete later -- will start with FYI:: 
// FYI: note, if we have more than one set of images, we have two options: 
// FYI: (1) either use the same number of images in each set and use a 2-dimensional array, or
// FYI: (2) put each set in its own array, then pass the array name to the functions
// FYI: if we have 4 sets, we can have a variable which s set equal to the chosen set

const cardBack = "Images/image.png";

const cardSet1 = ["Images/CardSet1/22224-tiger-icon.png", "Images/CardSet1/22227-horse-icon.png", "Images/CardSet1/22229-zebra-icon.png", "Images/CardSet1/22242-camel-icon.png", "Images/CardSet1/22246-elephant-icon.png", 
                  "Images/CardSet1/22256-chipmunk-icon.png", "Images/CardSet1/22257-hedgehog-icon.png", "Images/CardSet1/22265-turkey-icon.png", "Images/CardSet1/22272-penguin-icon.png", "Images/CardSet1/22278-owl-icon.png", 
                  "Images/CardSet1/22282-crocodile-icon.png", "Images/CardSet1/22283-turtle-icon.png", "Images/CardSet1/22290-spouting-whale-icon.png", "Images/CardSet1/22292-dolphin-icon.png", "Images/CardSet1/22297-octopus-icon.png", 
                  "Images/CardSet1/22299-crab-icon.png", "Images/CardSet1/22304-butterfly-icon.png", "Images/CardSet1/22305-bug-icon.png", "Images/CardSet1/22307-honeybee-icon.png", "Images/CardSet1/22308-lady-beetle-icon.png"];


/* cardsSet1 Copyright 2021 Catherine Celice, Salena Galloway, and Heidi Youmans

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License. */

//const cardSet2 = []
//const cardSet3 = []
//const cardSet4 = []

// credits: cardSet1    https://iconarchive.com/show/noto-emoji-animals-nature-icons-by-google.html


// Define some key variables

// -- these variables keep track of basic game design
let cardSet = cardSet1;
let numImages = cardSet.length;
let numCards = 12;
let numPairs = numCards/2;


// -- these variables will keep track of the original and current state of the game
let cardsOrder = [];    // this will hold the original layout of the game
let tableau = [];       // this array will hold the all the informaion we need about each card dealt out on the board


// Define variables for html elements with no event handlers
const board = document.getElementById("board");


// Define variables for the event handlers
/* const start = document.getElementById("start");
const timer = document.getElementById("timer");
const reset = document.getElementById("reset"); */


// Create event listeners
/* start.addEventListener("click", startGame);
reset.addEventListener("click", resetGame); */



// Challenge: optional function to take choice of card set and assign it to the cardSet variable
/* function chooseCardSet(choice){
    cardSet = choice;
    numImages = cardSet.length;

} //end of chooseCardSet */


// Challenge: optional function to take choice of nymber of cards to play with and assign it to the numCards variable
// FYI: I think that if we have this option to choose the number of cards, we should make them choose by a drop down menu so that we can ensure they pick an even number
/* function getNumCards(num) {
    numCards = num;
    numPairs = numCards/2;
} */




// function that creates the cad layout (tableau) when the game start button is clicked
function startGame() {

    const imagesIndices = pickGameDeck();

    // test code
        console.log("In startGame() after the game deck has been chosen.  These should match the previously printed array from pickGameDeck:")
        console.log(imagesIndices);
    // end of test code

    cardsOrder = shuffleDeck(imagesIndices);

        // test code
        console.log("In startGame() after the deck has been shuffled.  These should match the previous printed array from the shuffleDeck function.")
        console.log(cardsOrder);
    // end of test code
    //dealCards(cardOrder);

    // test code - I do not know if this line will be needed or not
    //return (cardsOrder);

    // Create the tableau array with these shuffled cards
    cardsOrder.forEach(addToTableau);

    // test code
        console.log("tableau array:")
        console.log(tableau);
    // end of test code

    // create and deal the cards
    for(let i = 0; i < numCards; i++) {

        // test code
            console.log("Creating card " + i);
        // end of test code
        createCard(i, tableau[i]);

    }


} // end of StartGame






// function that runs when the game reset button is clicked
function resetGame() {

} // end of resetGame()





// More functions to deal and play the game ***************************************************


// function to choose which cards to use -- it randomly chooses numPairs indices of images from the cardSet array
function pickGameDeck() {
    let numPairsChosen = 0;
    let imageIndicesChosen = [];

   

    while(numPairsChosen < numPairs) {

        
        // chose a random integer from 0 to numImages - 1
        let randomIndex = Math.floor(Math.random() * numImages);

        // check to see if it has already been chosen
        if(imageIndicesChosen.indexOf(randomIndex) === -1) {
            imageIndicesChosen.push(randomIndex);
            numPairsChosen = numPairsChosen + 1;
        }
    
    } // end of while loop

    // test code
        console.log("Inside pickGameDeck() these are the gameDeck -- the chosen cardSet images indices:");
        console.log(imageIndicesChosen);
    // end of test code

    return(imageIndicesChosen);

     
    
} // end of pickGameDeck



function shuffleDeck(indices) {

        const cardPairsArray = indices.concat(indices);
        let numCardsDealt = 0;
        let cardsOrder = [];
        let shuffledIndices = [];
        
        // test code
            console.log("In shuffleDeck() before the deck has been shuffled:")
            console.log("this next array should be the gameDeck repeated.")
            console.log(cardPairsArray);
        // end of test code


        // A check of the code here -- the length of cardPairsArray should equal numCards
        if(cardPairsArray.length !== numCards) {
            console.log("Fatal Error - the number of cards to deal is inconsistent.");
        }

        // This while loop randomly shuffles the indicies of the cards in the cardPairsArray
        
        while(numCardsDealt < numCards) {

        
            // chose a random integer from 0 to numCards - 1
            let randomIndex = Math.floor(Math.random() * numCards);
    
            // check to see if it has already been chosen
            if(shuffledIndices.indexOf(randomIndex) === -1) {
                shuffledIndices.push(randomIndex);
                numCardsDealt = numCardsDealt + 1;
            }
        
        } // end of while loop


        // test code
            console.log("In shuffleDeck() AFTER the indices have been shuffled, but before they are paired to the card indices:")
            console.log("ie these should be the numbers 0 through 11 (or whatever numCards is) in shuffled order.")
            console.log(shuffledIndices);
        // end of test code

        // This is where the randomly shuffled indicies of cardPairsArray are matched to its entries to form the cardsOrder array
        for(let i = 0; i < numCards; i++) {
            cardsOrder.push(cardPairsArray[shuffledIndices[i]]);
        };


        // test code
            console.log("In shuffleDeck() AFTER the deck has been shuffled:")
            console.log("this next array should be the array of pairs of imageIndices shuffled..")
            console.log(cardsOrder);
        // end of test code

       
        return (cardsOrder);

} // end of shuffleDeck()


function createCard(i, myObj){

    // This function MAY need to add sizing for the images, but we'll see if that is needed later.

    const card = document.createElement('div');
    //const face = document.createElement('div');
    const back = document.createElement('div');
    //const blankSpace = document.createElement('div');

    //const faceImage = document.createElement('img');
    const backImage = document.createElement('img');
    
    card.classList.add('card');
    //face.classList.add('cardFace');
    back.classList.add('cardBack');
    // blankSpace.classList.add('cardEmpty');


    board.appendChild(card);
    // card.appendChild(face);
    // face.appendChild(faceImage);
    // faceImage.src = myObj.faceImage;

    card.appendChild(back);
    back.appendChild(backImage);
    backImage.src = myObj.backImage;
    
    // card.appendChild(blankSpace);

    card.setAttribute("showing", "back");
    const pos = toString(i);
    card.setAttribute("position", pos);


} // end of createCard()


function addToTableau(item) {

    const faceImage = cardSet[item];
    cardObject = {faceUp: false, removed: false, cardSetFaceIndex: item, faceImage: faceImage, backImage: cardBack};
    tableau.push(cardObject);

}



// test code ***********************************************************************************
console.log()
console.log("Start of testing code at the end of the file");
// let tempArray = pickGameDeck();
// console.log(tempArray);

// let tempCardsDealt = [];
// tempCardsDealt = startGame();
// console.log("This next array should match the previously pronted one from the startGame function.")
// console.log(tempCardsDealt);


startGame();

