
let arcList = document.querySelector(".js-arc-list")
let btnOpen = document.querySelector(".js-open");
let monthAccordions = ""
let monthList = ""

fetch('json/archive.json')
.then(response => response.json())
.then(data => {document.querySelector(".js-arc-list")
    console.log("full data:", data);

    for (let month of data.months) {
        
        let monthName = month.name
        let categoryList = ""
        
        for (let category of month.categories) {

            let categoryName = category.name
            let entryList = ""

            for (let entry of category.entries) {
                let entryItem = "<li>" + entry + "</li>"
                entryList += entryItem
            }

            categoryList +=  `
                <div class="stack--xs" style="max-width: 260px; min-width: 260px">
                    <h3 class="heading-3"">${categoryName}</h3>
                    <ul class="">${entryList}</ul>
                </div>
            `
        }

        monthList += `
            <details class="stack--m month-details">
            <summary>
            <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 6)"><path d="m9.5.497 4 4.002-4 4.001"/><path d="m.5 4.5h13"/></g></svg>
            <h2 class="heading-2">${monthName}</h2>
            </summary>
                <div class="stack--s flex--desk justify--space-between--desk">${categoryList}</div>
            </details>
            `
    }

    let tpl = document.createElement("template");
    tpl.innerHTML = monthList;
    arcList.appendChild(tpl.content)

    let currentMonth = document.querySelector(".month-details")
    currentMonth.setAttribute("open", "")

    monthAccordions = document.querySelectorAll(".month-details")

    function toggleAccordions() {
    if (btnOpen.innerText === "open all") {
        for (let i = 0; i < monthAccordions.length; i++) {
        monthAccordions[i].setAttribute("open", "")
        btnOpen.innerText = "close all"
    }}
    else {
        for (let i = 0; i < monthAccordions.length; i++) {
        monthAccordions[i].removeAttribute("open", "")
        btnOpen.innerText = "open all"
        }
    }
        
    }

    btnOpen.addEventListener('click', toggleAccordions)

})
