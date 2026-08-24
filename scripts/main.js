import jsonData from './data/data.json' with { type: "json" };
console.log(jsonData);

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
let chosenDifficulty = localStorage.getItem("chosenDifficulty");
let chosenMode = localStorage.getItem("chosenMode");

initialLoad();

const textWall = document.querySelector(".text-wall");
textWall.innerHTML =  jsonData.easy[5].text;

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
            }
})

function initialLoad() {
    if (localStorage.getItem("chosenMode") == undefined || localStorage.getItem("chosenMode") == null || localStorage.getItem("chosenMode") == "") {
        localStorage.setItem("chosenMode",  "Timed"); 
    }
    if (localStorage.getItem("chosenMode") =="Timed" && screen.width >= 1000) {
        document.querySelector("#timed").checked = true;
        timedChoice.style.border = "1px solid hsl(214, 100%, 55%)";
                timedLabel.style.color ="hsl(214, 100%, 55%)";
                passageChoice.style.border = "";
                passageLabel.style.color ="";
    } else if  (localStorage.getItem("chosenMode") =="Passage" && screen.width >= 1000) {
        document.querySelector("#passage").checked = true;
        passageChoice.style.border = "1px solid hsl(214, 100%, 55%)";
                passageLabel.style.color ="hsl(214, 100%, 55%)";
                timedChoice.style.border = "";
                timedLabel.style.color ="";
    }
    if (localStorage.getItem("chosenDifficulty") == undefined || localStorage.getItem("chosenMode") == null || localStorage.getItem("chosenMode") == "") {
        localStorage.setItem("chosenDifficulty",  "easy"); 
    }
    if (localStorage.getItem("chosenDifficulty") =="easy" && screen.width >= 1000) {
        document.querySelector("#easy").checked = true;
        easyChoice.style.border = "1px solid hsl(214, 100%, 55%)";
                easyLabel.style.color ="hsl(214, 100%, 55%)";
                mediumChoice.style.border = "";
                mediumLabel.style.color ="";
                hardChoice.style.border = "";
                hardLabel.style.color ="";
    } else if  (localStorage.getItem("chosenDifficulty") =="medium" && screen.width >= 1000) {
        document.querySelector("#medium").checked = true;
        mediumChoice.style.border = "1px solid hsl(214, 100%, 55%)";
                mediumLabel.style.color ="hsl(214, 100%, 55%)";
                easyChoice.style.border = "";
                easyLabel.style.color ="";
                hardChoice.style.border = "";
                hardLabel.style.color ="";
    } else if  (localStorage.getItem("chosenDifficulty") =="hard" && screen.width >= 1000) {
        document.querySelector("#hard").checked = true;
        hardChoice.style.border = "1px solid hsl(214, 100%, 55%)";
                hardLabel.style.color ="hsl(214, 100%, 55%)";
                easyChoice.style.border = "";
                easyLabel.style.color ="";
                mediumChoice.style.border = "";
                mediumLabel.style.color ="";
    }
}

