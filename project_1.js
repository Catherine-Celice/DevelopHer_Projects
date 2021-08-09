// Project 1
// Group 2
// Catherine Celice, Salena Galloway, and Heidi Youmans
// Memory Game
// August 2021



// Define variables for the event handlers
const start = document.getElementById("start");
const timer = document.getElementById("timer");
const reset = document.getElementById("reset");

// Create event listeners
start.addEventListener("click", startGame);
reset.addEventListener("click", resetGame);


// Get data from the title page
inputArray = JSON.parse(sessionStorage.getItem("inputArray"));
let choice = inputArray[0];
let num = inputArray[1];
console.log("Start of gameboard")
console.log("choice " + choice);
console.log("num " + num);

// timer code
let DateObject = new Date();
let startingTime  = DateObject.getSeconds();
let theTime = setInterval(theTimer, 1000);
let gameRunning = false;


console.log(startingTime);
function theTimer() {

    // console.log("at A");
    // console.log("startingTime:" + startingTime);
    if(gameRunning) {
        
        let currentDateObject = new Date();
        let currentTime = currentDateObject.getSeconds();
        // console.log(currentTime);
        let timerTime = currentTime - startingTime;
        // console.log("Timertime = " + timerTime);
        timer.innerHTML = timerTime;
    }
}





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


 // licence information for images in cardSet1
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

const cardSet2 = ["Images/Dragons/dragon.png",   "Images/Dragons/dragon2.png", "Images/Dragons/dragon3.png", "Images/Dragons/dragon4.png", "Images/Dragons/dragon5.png", 
                  "Images/Dragons/dragon6.png",   "Images/Dragons/dragon7.png", "Images/Dragons/dragon8.png", "Images/Dragons/dragon9.png", "Images/Dragons/dragon10.png",
                  "Images/Dragons/dragon11.png",   "Images/Dragons/dragon12.png", "Images/Dragons/dragon13.png", "Images/Dragons/dragon14.png", "Images/Dragons/dragon15.png",
                  "Images/Dragons/dragon16.png",   "Images/Dragons/dragon17.png", "Images/Dragons/dragon18.png", "Images/Dragons/dragon19.png", "Images/Dragons/dragon20.png", 
                  "Images/Dragons/dragon21.png", "Images/Dragons/dragon22.png"]


                  //const cardSet3 = []
//const cardSet4 = []

// credits: cardSet1    https://iconarchive.com/show/noto-emoji-animals-nature-icons-by-google.html



// Define some key variables

//var favoritemovie = sessionStorage.getItem("favoriteMovie");


// -- these variables keep track of basic game design
let cardSet = cardSet1;
let numCards = 12;

console.log("Before " + numCards);
console.log("first image" + cardSet[0]);
console.log(choice);
cardSet = chooseCardSet(choice);
numCards = getNumCards(num);
console.log("After " + numCards);
console.log("first image" + cardSet[0]);
console.log(choice);
let numImages = cardSet.length;
let numPairs = numCards/2;



// -- these variables will keep track of the original and current state of the game
let cardsOrder = [];    // this will hold the original layout of the game
let tableau = [];       // this array will hold the all the informaion we need about each card dealt out on the board


// Define variables for html elements with no event handlers
const board = document.getElementById("board");







//reset.addEventListener("click", clearBoard);  // This was solely to test if the clearBoard function was working.

// Challenge: optional function to take choice of card set and assign it to the cardSet variable
function chooseCardSet(choice){
    

    let cardDeck = [];
    switch (choice) {


        case "a":
            cardDeck = cardSet1;
            break;

        case "b":
            cardDeck = cardSet2;
            break;

        default:
            cardDeck = cardSet1;
    }

    console.log("in chooseCardSet");
    console.log("should be " + cardSet2[0]);
    console.log("is" + cardDeck[0]);
    return cardDeck;

} //end of chooseCardSet


// Challenge: optional function to take choice of nymber of cards to play with and assign it to the numCards variable
// FYI: I think that if we have this option to choose the number of cards, we should make them choose by a drop down menu so that we can ensure they pick an even number
function getNumCards(num) {
    numCards = parseInt(num);

    return numCards;
}

// We need to rn these functions before any others run in order to get the input info from the title page




// function that creates the cad layout (tableau) when the game start button is clicked
function startGame() {

    clearBoard();
    const imagesIndices = pickGameDeck();
    let DateObject2 = new Date();
    startingTime  = DateObject2.getSeconds();
    gameRunning = true;

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
    gameRunning = false;
    clearBoard();

    // Recreate and deal the cards using the same cards and order as before.
    for(let i = 0; i < numCards; i++) {

        // test code
            console.log("Creating card " + i);
        // end of test code
        createCard(i, tableau[i]);
    }
     

    let DateObject3 = new Date();
    startingTime  = DateObject3.getSeconds();
    gameRunning = true;

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
    const back = document.createElement('div');
    const cardImage = document.createElement('img');
    
    card.classList.add('card');
    // back.classList.add('cardBack');
    board.appendChild(card);
    // card.appendChild(back);
    card.appendChild(cardImage);
    cardImage.src = myObj.backImage;
    cardImage.setAttribute("faceImage", myObj.faceImage);


} // end of createCard()


function addToTableau(item) {

    const faceImage = cardSet[item];
    cardObject = {faceUp: false, removed: false, cardSetFaceIndex: item, faceImage: faceImage, backImage: cardBack};
    tableau.push(cardObject);

}


function clearBoard() {

    while(board.firstChild) {
        board.removeChild(board.firstChild);
    }
    
}



function runTimer() {


}

function startTimer() {



} // end of startTimer()


function stopTimer() {


} // end of stopTimer ()





function filpAndMatchCards() {
    board.addEventListener("click", (event) => {
      let currentCard = event.target;
      let alreadyShowing = document.getElementsByClassName("show");
      if (alreadyShowing.length > 0) {
        board.style.pointerEvents = 'none';
        for (let i = 0; i < alreadyShowing.length; i++) {
            currentCard.src = currentCard.getAttribute("faceImage");
            currentCard.parentNode.classList.add("open");
          if (alreadyShowing[i].firstChild.getAttribute("faceImage") != currentCard.getAttribute("faceImage")) {
            console.log("Not A Match");
            setTimeout(() => {
                currentCard.src = cardBack;
                alreadyShowing[i].firstChild.src = cardBack;
                alreadyShowing[i].classList.remove("open","show");
                currentCard.parentNode.classList.remove("open");
            }, 1000);
          } else {
            //Cards stay on the board and are disabled via css
            console.log("Match");
            alreadyShowing[i].classList.add("match");
            alreadyShowing[i].classList.remove("open","show");
            currentCard.parentNode.classList.add("match");
            currentCard.parentNode.classList.remove("open");
            //Requirement clarify -- Remove from the board??
            // setTimeout(() => { 
            //     alreadyShowing[i].remove();
            //     currentCard.parentNode.remove();
            //     board.style.pointerEvents = 'auto';
            // }, 1000);
          }
        }
        board.style.pointerEvents = 'auto';
      } else {
        currentCard.parentNode.classList.add("open","show");
        currentCard.src = currentCard.getAttribute("faceImage");
      }
    });
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

// for(let i = 1; i <4; i++){
//     startGame();
// }
// console.log("Clearing the board.");
// clearBoard();


  filpAndMatchCards();

