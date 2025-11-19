let allPrompts = []

fetch('json/prompts.json')
.then(response => response.json())
.then(data => {
    console.log(data)
   
    data.forEach(element => {
        allPrompts.push(...element)
    });
    })



function GetPrompts()
{
    const prompt1 = allPrompts[Math.floor(Math.random() * allPrompts.length)];
    const prompt2 = allPrompts[Math.floor(Math.random() * allPrompts.length)];

    if (prompt1 === prompt2) {
        const prompt2 = allPrompts[Math.floor(Math.random() * allPrompts.length)];
    } else {
        document.querySelector(".js-prompt-1").textContent=prompt1;
        document.querySelector(".js-prompt-2").textContent=prompt2;
    }
};


const bttPrompts = document.querySelector(".js-generate");
bttPrompts.addEventListener("click", GetPrompts)
