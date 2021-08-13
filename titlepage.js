



// Define variables for the event handlers
const enter = document.getElementById("enter");
enter.addEventListener("click", goToGame);

let inputArray = ["a", "12"];


// This function operates from the home entry page when the user clicks the "Enter Game" button.
// It will check f the user entered options for the cardSet and number of cards
function goToGame(){

    deckSize = document.getElementById("deckSize").value;
    let cardChoice = document.getElementById("cardDesign").value;
    

    switch(cardChoice) {

        case "cardSet1":
            //cardSet = cardSet1;
            // sessionStorage.setItem("cardSet", "a")
            inputArray[0] = "a";
            break;


        case "cardSet2":
            //cardSet = cardSet1;
            // sessionStorage.setItem("cardSet", "b")
            inputArray[0] = "b";
            break;
    
        default:
            //cardSet = cardSet1;
            // sessionStorage.setItem("cardSet", "a")
            inputArray[0] = "a";
    }

    switch(deckSize) {

        case "12":
            inputArray[1] = "12";
            break;
    
        case "16":
            inputArray[1] = "16";
            break;
        
        case "20":
            inputArray[1] = "20";
        break;
    
        case "24":
            inputArray[1] = "24";
            break;

        case "30":
            inputArray[1] = "30";
            break;
        
        default:
            inputArray[1] = "12";
            
    }
    
    // Pass input information to a session storage area from where the gameboard's script will be able to read it
    sessionStorage.setItem("inputArray", JSON.stringify(inputArray));

    // go to gameboard
    //location.href = "/gameboard.html";
    location.replace("./gameboard.html")

}


