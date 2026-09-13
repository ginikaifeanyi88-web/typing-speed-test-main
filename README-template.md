# Frontend Mentor - Typing Speed Test solution

This is a solution to the [Typing Speed Test challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/typing-speed-test). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Strangely harder than the last project which was categorized as intermediate on Frontend and technically a bit more complex. Anyways I wanted to do something that did not involve asnychronous code and API calling and was a little more light weight as I used my time learning other programming languages. To my surprise I learned a lot with this project. For one I found out that the .textContent DOM property is much more reliable for reading text in real time then innerHTML. Also I found out about the screwy world of timers in JavaScript and made a function that is able to display the correct amount of time passed, even when the user has moved to a new tab:

```js
function myTimer() {
 var start = Date.now();
let currentSecond  = 0;
let currentMinute = 0;
 let minutesPassed =0;
    const myInterval = setInterval(function() {

    var delta = Date.now() - start; // milliseconds elapsed since start
    currentMinute = Math.floor(delta/60000);
    currentSecond = Math.floor(delta / 1000);
   
    if (currentSecond % 60 ==0) {
        minutesPassed = currentSecond /60;
        
    }
    currentSecond = currentSecond - (60*minutesPassed);
     if (currentSecond > 61){
        let additionalMinutes = Math.trunc(currentSecond /60);
        console.log("Timer is off by: "+additionalMinutes+ " minutes. Trying to resolve...");
        // currentMinute -= additionalMinutes;
        currentSecond = currentSecond - (60* additionalMinutes);
    }
    timeStatvalue.innerHTML = `${currentMinute <0 ? "0"+currentMinute:currentMinute}:${currentSecond <10? "0"+currentSecond:currentSecond}`;
  if (timedButton.checked && (currentSecond >=30 && currentSecond<50)) {
    timeStatvalue.style.color ="hsl(49, 85%, 70%)";
    } 
     if (timedButton.checked && (currentSecond >=50 && currentSecond<60)) {
    timeStatvalue.style.color =" hsl(354, 63%, 57%)";
    } 
    if (timedButton.checked && currentMinute==1) {
        clearInterval(myInterval);
        generateResult();
    } 
}, 1000); 
}
}
```

### Continued development

The code needs refactoring but its finished otherwise.

### Useful resources

- Stack Overflow - This was pretty much the only resource I used while working on this project.

## Author

- Frontend Mentor - [@ginikaifeanyi88-web](https://www.frontendmentor.io/profile/ginikaifeanyi88-web)
