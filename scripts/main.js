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
const bestWPM = document.querySelector(".best-score-value");
let chosenDifficulty = localStorage.getItem("chosenDifficulty");
let chosenMode = localStorage.getItem("chosenMode");

// executing initialLoad function
initialLoad();

// loading data to text wall (currently a work in progress)
let placeHolderText = "";
let stringArr = "";
const textWall = document.querySelector(".text-wall");
const placeHolder = document.querySelector(".placeholder")
stringArr = jsonData.hard[8].text. split('');
stringArr.forEach((character)=>{
    placeHolderText+= `<span>${character}</span>`;
});
placeHolder.innerHTML = placeHolderText;

// time and accuracy in dom declaration
const timeStatvalue = document.querySelector(".Time-stat-value");
const accuracyStatvalue = document.querySelector(".Accuracy-stat-value > span");
const WPMStatvalue = document.querySelector(".WPM-stat-value");

// event listeners for start button and start text
const startButton = document.querySelector(".start-button");
const startButtonAndText = document.querySelector(".button-and-text");
const startText = document.querySelector(".start-text");
startButton.addEventListener("click", ()=>{
    placeHolder.style.filter = "blur(0px)";
    startButtonAndText.style.display = "none";
    textWall.focus();
    myTimer();
});

startText.addEventListener("click", ()=>{
    placeHolder.style.filter = "blur(0px)";
    startButtonAndText.style.display = "none";
     textWall.focus();
    myTimer();
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



// text wall typing event listener
 let greenNodes = 0;
 let redNode = 0;
 let greenNodesResult = 0;
 let redNodeResult = 0;
 let  accuracyPercentage =0;
 let wordsPerMin = 0;
 let textLengthChecker=0;

     
textWall.addEventListener("input", ()=>{
    let textWallValue = textWall.textContent;
        greenNodesResult = 0;
     redNodeResult = 0;
    placeHolder.childNodes.forEach((node)=>{
        node.style.color = "";
        node.style.textDecoration = "";
    })
    for (let i =0; i<stringArr.length;i++) {
          if (textWallValue[i] == stringArr[i]) {
            placeHolder.childNodes[i].style.color = "hsl(140, 63%, 57%)";
            placeHolder.childNodes[i].style.textDecoration = "";
             greenNodes +=1;
             greenNodesResult+=1;
          } else if ((textWallValue[i] !== stringArr[i]) && (textWallValue[i] !== undefined) && !(placeHolder.childNodes[i].textContent.charCodeAt(0) == 32 && textWallValue.charCodeAt(i) == 160)) {
            placeHolder.childNodes[i].style.color = " hsl(354, 63%, 57%)";
            placeHolder.childNodes[i].style.textDecoration = "underline";
            redNode +=1;
            redNodeResult+=1;
          }  
          else if (placeHolder.childNodes[i].textContent.charCodeAt(0) == 32 && textWallValue.charCodeAt(i) == 160) {
                placeHolder.childNodes[i].style.color = "hsl(140, 63%, 57%)";
            placeHolder.childNodes[i].style.textDecoration = "";
             greenNodes +=1;
             greenNodesResult+=1;
          }
    } 
      let typedCharacters = greenNodesResult + redNodeResult;
        accuracyPercentage = (Math.round((greenNodesResult / typedCharacters)*100));
        realTimeAccuracy(accuracyPercentage);
        wordsPerMin = (textWallValue.length /5) /1;
        if (textWallValue.length > textLengthChecker) {
            textLengthChecker = textWallValue.length;
             WPMStatvalue.innerHTML = Math.round(wordsPerMin);
        }
})


// intialLoad function
function initialLoad() {
    let initScoreArray = [0];
    if (localStorage.getItem("wpmScore") == undefined || localStorage.getItem("wpmScore") == null || localStorage.getItem("wpmScore") == "") {
        localStorage.setItem("wpmScore", JSON.stringify(initScoreArray));
    }
    bestWPM.innerHTML = returnHighScore(JSON.parse(localStorage.getItem("wpmScore")));
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

// timer function
const wrapperDiv = document.querySelector(".wrapper");
const restartTestDiv = document.querySelector(".restart-test");
const statsBar = document.querySelector(".stats-difficulty-and-mode");
const resultsDiv = document.querySelector(".results");
const resultWPM = document.querySelector(".result-stat-WPM");
const resultAccuracy = document.querySelector(".result-stat-accuracy-value");
const resultRightValues = document.querySelector(".result-stat-characters-correct");
const resultWrongValues = document.querySelector(".result-stat-characters-wrong");
const resultMessage = document.querySelector(".results-title");
const resultSecondMessage = document.querySelector(".results-message");

function myTimer() {
 var start = Date.now();
let currentSecond  = 0;
    const myInterval = setInterval(function() {
    var delta = Date.now() - start; // milliseconds elapsed since start
console.log(redNode);

    currentSecond = Math.floor(delta / 1000);
    if (currentSecond < 10){
        timeStatvalue.innerHTML = `0:0${currentSecond}`;
    } else if (currentSecond > 10) {
    timeStatvalue.innerHTML = `0:${currentSecond}`;
    } 
    if (currentSecond==60) {
        clearInterval(myInterval);
        generateResult();
    }

}, 1000); 
}

//generatE result function
function generateResult() {
        wrapperDiv.style.display ="none";
        restartTestDiv.style.display ="none";
        statsBar.style.display ="none";
        resultsDiv.style.display ="block";
        resultWPM.innerHTML = Math.round(wordsPerMin);
        if (greenNodes == 0 && redNode == 0){
             resultAccuracy.innerHTML = 0;
        } else {
             resultAccuracy.innerHTML = Math.round((greenNodes/ (greenNodes + redNode))*100);
        }
        resultRightValues.innerHTML = greenNodesResult;
        resultWrongValues.innerHTML = redNodeResult;
        let highScoreArray = JSON.parse(localStorage.getItem("wpmScore"));
        if ((Math.round(wordsPerMin) > returnHighScore(highScoreArray))&&(highScoreArray.length !=1)) {
            resultMessage.innerHTML = "High Score Smashed";
            resultSecondMessage.innerHTML = "You're getting faster. That was incredible typing!";
        } else if (highScoreArray.length == 1){
            resultMessage.innerHTML = "Baseline Established!";
            resultSecondMessage,innerHTML = "You've set the bar! Now the real challenge begins—time to beat it.";
        }
        highScoreArray.push(Math.round(wordsPerMin));
        localStorage.setItem("wpmScore", JSON.stringify(highScoreArray));
        bestWPM.innerHTML = returnHighScore(JSON.parse(localStorage.getItem("wpmScore")));
}

// puts accuracy to page while typing
function realTimeAccuracy(accuracyPercentage) {
    if (accuracyPercentage >0) {
            accuracyStatvalue.innerHTML = accuracyPercentage;
        } else {
            accuracyStatvalue.innerHTML = 0;
        }
}

// return high score function
function returnHighScore(array) {
    let highestScore = 0;
    array.forEach((item)=>{
        if (item > highestScore) {
            highestScore= item;
        }
    })
    return highestScore;
}