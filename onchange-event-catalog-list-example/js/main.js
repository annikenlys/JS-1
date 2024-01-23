const dropDown = document.querySelector("#circles");

const circlesContainer = document.querySelector(".circles-container");

dropDown.onchange = function () {
    circlesContainer.innerHTML = "";
    for (let x = 1; x <= this.value; x++){
        console.log(x);

        circlesContainer.innerHTML += `
        <div class="circle">${x}</div>
        `
    }
};
