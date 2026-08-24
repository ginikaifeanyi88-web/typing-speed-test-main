// fucntion to return styles for chose mode buttons
export function returnModeStyles(screenWidth, chosenMode) {
      let timedRadioValue;
      let passageRadioValue;
      let timedBorderStyle = "";
      let timedLabelColor ="";
      let passageChoiceBorderStyle ="";
      let passageLabelColor ="";
      let modeDecisionNameText ="";
     if (chosenMode =="Timed" && screenWidth >= 1000) {
         timedRadioValue= true;
         passageRadioValue = false;
        timedBorderStyle = "1px solid hsl(214, 100%, 55%)";
                timedLabelColor ="hsl(214, 100%, 55%)";
                passageChoiceBorderStyle = "";
                passageLabelColor ="";
                 modeDecisionNameText = "Timed (60s)";
    } else if  (chosenMode=="Passage" && screenWidth >= 1000) {
        timedRadioValue= false;
         passageRadioValue = true;
              timedBorderStyle = "";
                timedLabelColor ="";
                passageChoiceBorderStyle = "1px solid hsl(214, 100%, 55%)";
                passageLabelColor ="hsl(214, 100%, 55%)";
                 modeDecisionNameText = "Passage";
    } else if  (chosenMode=="Timed" && screenWidth < 1000) {
       timedRadioValue = true;
       passageRadioValue = false;
       modeDecisionNameText = "Timed (60s)";
    } else if  (chosenMode =="Passage" && screenWidth < 1000) {
        timedRadioValue = false;
        passageRadioValue = true;
       modeDecisionNameText = "Passage";
    }
    return [timedRadioValue, passageRadioValue, timedBorderStyle, timedLabelColor, passageChoiceBorderStyle, passageLabelColor, modeDecisionNameText];
}

// fucntion to return styles for chosen difficulty buttons
export function returnDifficultyStyles(screenWidth, chosenDifficulty) {
    let easyRadioValue;
    let mediumRadioValue;
    let hardRadioValue;
    let easyBorderStyle ="";
    let easyLabelColor ="";
    let mediumBorderStyle = "";
    let mediumLabelColor= "";
    let hardBorderStyle ="";
    let hardLabelColor ="";
    let difficultyDecisionNameText ="";
    if (chosenDifficulty=="easy" && screenWidth >= 1000) {
        easyRadioValue = true;
        mediumRadioValue = false;
        hardRadioValue = false;
        easyBorderStyle = "1px solid hsl(214, 100%, 55%)";
                easyLabelColor ="hsl(214, 100%, 55%)";
                mediumBorderStyle = "";
                mediumLabelColor ="";
                hardBorderStyle = "";
                hardLabelColor ="";
                difficultyDecisionNameText  = "Easy";
    } else if  (chosenDifficulty=="medium" && screenWidth >= 1000) {
        easyRadioValue= false;
        mediumRadioValue = true;
        hardRadioValue = false;
        mediumBorderStyle  = "1px solid hsl(214, 100%, 55%)";
                mediumLabelColor ="hsl(214, 100%, 55%)";
                easyBorderStyle = "";
                easyLabelColor ="";
                hardBorderStyle= "";
                hardLabelColor ="";
                difficultyDecisionNameText ="Medium";
    } else if  (chosenDifficulty =="hard" && screenWidth >= 1000) {
         easyRadioValue= false;
        mediumRadioValue = false;
        hardRadioValue = true;
        mediumBorderStyle  = "";
                mediumLabelColor ="";
                easyBorderStyle = "";
                easyLabelColor ="";
                hardBorderStyle= "1px solid hsl(214, 100%, 55%)";
                hardLabelColor ="hsl(214, 100%, 55%)";
                difficultyDecisionNameText ="Hard";
    } else if  (chosenDifficulty=="easy" && screenWidth < 1000) {
            easyRadioValue= true;
        mediumRadioValue = false;
        hardRadioValue = false;
        difficultyDecisionNameText = "Easy";
    } else if  (chosenDifficulty=="medium" && screenWidth < 1000) {
        easyRadioValue= false;
        mediumRadioValue = true;
        hardRadioValue = false;
        difficultyDecisionNameText = "Medium";
    } else if  (chosenDifficulty=="hard" && screenWidth < 1000) {
        easyRadioValue= false;
        mediumRadioValue = false;
        hardRadioValue = true;
        difficultyDecisionNameText = "Hard";
    }
    return [easyRadioValue, mediumRadioValue, hardRadioValue, easyBorderStyle, easyLabelColor, mediumBorderStyle, mediumLabelColor, hardBorderStyle, hardLabelColor, difficultyDecisionNameText];
}