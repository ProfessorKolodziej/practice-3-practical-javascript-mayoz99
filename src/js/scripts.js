//find the elment to hide
const toggledParagraph = document.querySelector(".show");
console.log(toggledParagraph);

function toggleParagraph () {
    toggledParagraph.classList.toggle("hide");
    toggledParagraph.classList.toggle("show");
    console.log("My toggle function");
    console.log(toggledParagraph);
}

const toggleButton = document.querySelector("#toggle-control");

toggleButton.addEventListener("click", toggleParagraph);