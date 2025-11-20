
const shape = document.querySelector(".js-path");
const btnGenerate = document.querySelector(".js-create-shape");
const selectCorners = document.querySelector(".js-corner-select");
const colors = ["#75A8FF", "#5172EC", "#F5683D", "#FFC466", "#F88644", "#4B4B4B", "#AFBEFD"];
let nrCorners = selectCorners.value;



function generateCordinates(length, min, max) {
    return Array.from({length}, () => [
    Math.floor(Math.random() * (max - min + 1)) + min,
    Math.floor(Math.random() * (max - min + 1)) + min
  ])
};


selectCorners.addEventListener("change", () => {
  nrCorners = selectCorners.value
});

btnGenerate.addEventListener("click", () => {
    let newCoordinates = generateCordinates(nrCorners, 20, 300);
    let newPathData = newCoordinates.map(pair => pair.join(' ')).join(' L ');
    newPath = `M ${newPathData} Z`;
    shape.setAttribute("d", newPath);
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    shape.setAttribute("fill", newColor)
} );