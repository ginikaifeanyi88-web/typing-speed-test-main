// importing data from json file and functions
import jsonData from './data/data.json' with { type: "json" };
import { returnModeStyles, returnDifficultyStyles } from './controllers/styleRelatedFunctions.js';
console.log(jsonData);


// radio button and related variable declarations
const difficultyMenu = document.querySelector(".choices-difficulty");
const modeMenu = document.querySelector(".choices-mode");
const easyChoice = document.querySelector(".easy-choice");
const mediumChoice = document.querySelector(".medium-choice");
const hardChoice = document.querySelector(".hard-choice");
const easyLabel = document.querySelector("#easy-label");
const mediumLabel = document.querySelector("#medium-label");
const hardLabel = document.querySelector("#hard-label");
const timedChoice = document.querySelector(".timed-choice");
const passageChoice = document.querySelector(".passage-choice");
const timedLabel = document.querySelector("#timed-label");
const passageLabel = document.querySelector("#passage-label");
const difficultyDecisionName = document.querySelector(".difficulty-decision-name");
const modeDecisionName = document.querySelector(".mode-decision-name");
let chosenDifficulty = localStorage.getItem("chosenDifficulty");
let chosenMode = localStorage.getItem("chosenMode");

// executing initialLoad function
initialLoad();

// loading data to text wall (currently a work in progress)
const textWall = document.querySelector(".text-wall");
textWall.setAttribute("placeholder", jsonData.easy[5].text);


// event listeners for start button and text wall
const startButton = document.querySelector(".start-button");
const startButtonAndText = document.querySelector(".button-and-text");
startButton.addEventListener("click", ()=>{
    textWall.style.filter = "blur(0px)";
    startButtonAndText.style.display = "none";
});

textWall.addEventListener("click", ()=>{
    textWall.style.filter = "blur(0px)";
    startButtonAndText.style.display = "none";
})

// radio button event listeners
easyChoice.addEventListener("click", ()=>{
    document.querySelector("#easy").checked = true;
            localStorage.setItem("chosenDifficulty", "easy");
            chosenDifficulty = localStorage.getItem("chosenDifficulty");
             console.log(chosenDifficulty);
            if (screen.width >= 1000) {
                easyChoice.style.border = "1px solid hsl(214, 100%, 55%)";
                easyLabel.style.color ="hsl(214, 100%, 55%)";
                mediumChoice.style.border = "";
                mediumLabel.style.color ="";
                hardChoice.style.border = "";
                hardLabel.style.color ="";
                difficultyDecisionName.innerHTML = "Easy";
            }
            if (screen.width < 1000) {
                difficultyDecisionName.innerHTML = "Easy";
            }
})

mediumChoice.addEventListener("click", ()=>{
    document.querySelector("#medium").checked = true;
            localStorage.setItem("chosenDifficulty", "medium");
            chosenDifficulty = localStorage.getItem("chosenDifficulty");
            console.log(chosenDifficulty);
            if (screen.width >= 1000) {
                mediumChoice.style.border = "1px solid hsl(214, 100%, 55%)";
                mediumLabel.style.color ="hsl(214, 100%, 55%)";
                easyChoice.style.border = "";
                easyLabel.style.color ="";
                hardChoice.style.border = "";
                hardLabel.style.color ="";
                difficultyDecisionName.innerHTML = "Medium";
            }
            if (screen.width < 1000) {
                difficultyDecisionName.innerHTML = "Medium";
            }
})

hardChoice.addEventListener("click", ()=>{
    document.querySelector("#hard").checked = true;
            localStorage.setItem("chosenDifficulty", "hard");
            chosenDifficulty = localStorage.getItem("chosenDifficulty");
            console.log(chosenDifficulty);
            if (screen.width >= 1000) {
                hardChoice.style.border = "1px solid hsl(214, 100%, 55%)";
                hardLabel.style.color ="hsl(214, 100%, 55%)";
                easyChoice.style.border = "";
                easyLabel.style.color ="";
                mediumChoice.style.border = "";
                mediumLabel.style.color ="";
                 difficultyDecisionName.innerHTML = "Hard";
            }
            if (screen.width < 1000) {
                difficultyDecisionName.innerHTML = "Hard";
            }
})

timedChoice.addEventListener("click", ()=>{
    document.querySelector("#timed").checked = true;
            localStorage.setItem("chosenMode", "Timed");
            chosenMode = localStorage.getItem("chosenMode");
            console.log(chosenMode);
            if (screen.width >= 1000) {
                timedChoice.style.border = "1px solid hsl(214, 100%, 55%)";
                timedLabel.style.color ="hsl(214, 100%, 55%)";
                passageChoice.style.border = "";
                passageLabel.style.color ="";
                modeDecisionName.innerHTML = "Timed (60s)";
            }
             if (screen.width < 1000) {
                modeDecisionName.innerHTML = "Timed (60s)";
            }
})

passageChoice.addEventListener("click", ()=>{
    document.querySelector("#passage").checked = true;
            localStorage.setItem("chosenMode", "Passage");
            chosenMode = localStorage.getItem("chosenMode");
            console.log(chosenMode);
            if (screen.width >= 1000) {
                passageChoice.style.border = "1px solid hsl(214, 100%, 55%)";
                passageLabel.style.color ="hsl(214, 100%, 55%)";
                timedChoice.style.border = "";
                timedLabel.style.color ="";
                modeDecisionName.innerHTML = "Passage";
            }
            if (screen.width < 1000) {
                modeDecisionName.innerHTML = "Passage";
            }
})

//mode and difficulty button event listeners in mobile
const modeButton = document.querySelector(".mode");
const difficultyButton = document.querySelector(".difficulty");
const bodyButton = document.querySelector("body");
const decisions =document.querySelectorAll(".decision");
const decisionIcons = document.querySelectorAll(".decision > i");

modeButton.addEventListener("click", ()=>{
    modeMenu.style.display="block";
    difficultyMenu.style.display="";
});

difficultyButton.addEventListener("click", ()=>{
    difficultyMenu.style.display="block";
    modeMenu.style.display="";
});

bodyButton.addEventListener("click", (event)=>{
     if (event.target ==  difficultyButton|| event.target == modeButton || event.target == modeMenu || event.target == difficultyMenu|| event.target == decisions[0]|| event.target == decisions[1]|| event.target== difficultyDecisionName||event.target == modeDecisionName|| event.target ==decisionIcons[0] || event.target == decisionIcons[1]) {
      
    } else {
     modeMenu.style.display="";
      difficultyMenu.style.display="";
    }
    
})

// intialLoad function
function initialLoad() {
    if (localStorage.getItem("chosenMode") == undefined || localStorage.getItem("chosenMode") == null || localStorage.getItem("chosenMode") == "") {
        localStorage.setItem("chosenMode",  "Timed"); 
    }
  let modeStyles =  returnModeStyles(screen.width,  localStorage.getItem("chosenMode"));
   document.querySelector("#timed").checked = modeStyles[0];
   document.querySelector("#passage").checked = modeStyles[1];
   timedChoice.style.border = modeStyles[2];
   timedLabel.style.color = modeStyles[3];
   passageChoice.style.border = modeStyles[4]
    passageLabel.style.color = modeStyles[5];
   modeDecisionName.innerHTML = modeStyles[6]
    if (localStorage.getItem("chosenDifficulty") == undefined || localStorage.getItem("chosenDifficulty") == null || localStorage.getItem("chosenDifficulty") == "") {
        localStorage.setItem("chosenDifficulty",  "easy"); 
    }
    let difficultyStyles = returnDifficultyStyles(screen.width, localStorage.getItem("chosenDifficulty"));
        document.querySelector("#easy").checked = difficultyStyles[0];
        document.querySelector("#medium").checked = difficultyStyles[1];
        document.querySelector("#medium").checked = difficultyStyles[2];
        easyChoice.style.border = difficultyStyles[3];
        easyLabel.style.color = difficultyStyles[4];
         mediumChoice.style.border = difficultyStyles[5];
         mediumLabel.style.color =difficultyStyles[6];
         hardChoice.style.border = difficultyStyles[7];
         hardLabel.style.color = difficultyStyles[8];
         difficultyDecisionName.innerHTML = difficultyStyles[9];
}

