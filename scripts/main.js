import jsonData from './data/data.json' with { type: "json" };
console.log(jsonData);

const textWall = document.querySelector(".text-wall");
textWall.innerHTML =  jsonData.easy[5].text;