let button1 = document.querySelector(".btn-1");
let button2 = document.querySelector(".btn-2");
let displayCode = document.querySelector(".copied-code");
let displayCodeDiv = document.querySelector(".copied-code-div");
let setBgColor = document.querySelector(".container")
let directionContent = document.querySelector(".direction-content")
let toRightTop = "to right top";
let rightTop = "to right";
let toRightBottom = "to right bottom";
let toBottom = "to bottom";
let toLeftBottom = "to left bottom";
let toLeftTop = "to left top";
let toLeft = "to left";
let toTop = "to top";


let selectedItemId = null;


directionContent.addEventListener("click", (event) => {
    const clicked = event.target;
    
    // Only proceed if the clicked element is a direction icon
    if (!clicked.classList.contains("fa-solid")) return;

    // Remove previously selected class
    const previouslySelected = directionContent.querySelector(".selected-direction");
    if (previouslySelected) {
        previouslySelected.classList.remove("selected-direction");
    }

    // Add class to clicked element
    clicked.classList.add("selected-direction");

    // Store the ID of the selected item
    selectedItemId = clicked.id;
    // console.log("Selected ID:", selectedItemId);
});

function useSelectedItemId() {

    if (selectedItemId) {
            let red1 = Math.floor(Math.random() * 256);
            let red2 = Math.floor(Math.random() * 256);
            let green1 = Math.floor(Math.random() * 256);
            let green2 = Math.floor(Math.random() * 256);
            let blue1 = Math.floor(Math.random() * 256);
            let blue2 = Math.floor(Math.random() * 256);
            let cssCode = `rgb(${red1}, ${green1}, ${blue1}), rgb(${red2}, ${green2}, ${blue2})`
            
        if (selectedItemId === "item-1") {
            displayCode.innerHTML = `background-color: (${toRightTop}, ${cssCode})`
            setBgColor.style.background = `linear-gradient(${toRightBottom}, ${cssCode})`;
        }
        else if (selectedItemId === "item-2") {
            displayCode.innerHTML = `background-color: (${rightTop}, ${cssCode})`
            setBgColor.style.background = `linear-gradient(${rightTop}, ${cssCode})`;
        }
        else if (selectedItemId === "item-3") {
            displayCode.innerHTML = `background-color: (${toRightBottom}, ${cssCode})`
            setBgColor.style.background = `linear-gradient(${toRightBottom}, ${cssCode})`;
        }
        else if (selectedItemId === "item-4") {
            displayCode.innerHTML = `background-color: (${toBottom}, ${cssCode})`
            setBgColor.style.background = `linear-gradient(${toBottom}, ${cssCode})`;
        }
        else if (selectedItemId === "item-5") {
           displayCode.innerHTML = `background-color: (${toLeftBottom}, ${cssCode})`
            setBgColor.style.background = `linear-gradient(${toLeftBottom}, ${cssCode})`;
        }
        else if (selectedItemId === "item-6") {
            displayCode.innerHTML = `background-color: (${toLeft}, ${cssCode})`
            setBgColor.style.background = `linear-gradient(${toLeft}, ${cssCode})`;
        }
        else if (selectedItemId === "item-7") {
            displayCode.innerHTML = `background-color: (${toLeftTop}, ${cssCode})`
            setBgColor.style.background = `linear-gradient(${toLeftTop}, ${cssCode})`;
        }
        else if (selectedItemId === "item-8") {
            displayCode.innerHTML = `background-color: (${toTop}, ${cssCode})`
            setBgColor.style.background = `linear-gradient(${toTop}, ${cssCode})`;
        }
    }
}

const copyColor = () => {
    let copyColorCode = displayCode.textContent;
    navigator.clipboard.writeText(copyColorCode).then(() => {
        alert("Color copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    })
}

displayCodeDiv.addEventListener("click", () => {
    copyColor()
})

button1.addEventListener("click", () => {
    useSelectedItemId()
});
button2.addEventListener("click", () => {
    useSelectedItemId()
});

