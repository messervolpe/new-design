//Amount

let form = document.querySelector(".js-calculator");
let a = form.elements["a"];
let b = form.elements["b"];
let c = form.elements["c"];
let result = form.elements["result"];

function updateResult() {
    let aValue = parseInt(a.value);
    let bValue = parseInt(b.value);
    let cValue = parseInt(c.value);
    let newValue = aValue*cValue/bValue
    let newResult = Math.round(newValue * 100) / 100
    
    if (isNaN(newResult)) {
        result.value = "x"
    }
    else {
        result.value = newResult
    }
}

form.addEventListener("input", updateResult);





//Timer


let datesForm = document.querySelector(".js-dates");
let StartDate = document.querySelector(".js-start-date");
let EndDate = document.querySelector(".js-end-date");
let DaysPassed = document.querySelector(".js-days-passed");

StartDate.valueAsDate = new Date();
EndDate.valueAsDate = new Date();


function CalculateDays() {

    let StartDate = document.querySelector(".js-start-date").valueAsDate;
    let EndDate = document.querySelector(".js-end-date").valueAsDate;

    let DifferenceTime = new Date(EndDate).getTime() - new Date(StartDate).getTime();

    let DifferenceDays = Math.round (DifferenceTime / (1000 * 3600 * 24));

    DaysPassed.textContent = DifferenceDays;
}

datesForm.addEventListener("input", CalculateDays);