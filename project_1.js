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
let cardSet = cardSet1;
let numImages = cardSet.length;
let numCards = 12;
let numPairs = numCards/2;


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

    return(imageIndicesChosen);
    
} // end of pickGameDeck




// test code ***********************************************************************************
console.log()
let tempArray = pickGameDeck();
console.log(tempArray);




