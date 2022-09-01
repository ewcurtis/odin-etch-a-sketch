const container = document.querySelector("#container");
const reset = document.querySelector("#reset");
const setSize = document.querySelector("#setSize");
let num = 16;
//sets the row on the sketchpad
function setRow(num) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let i = 0; i < num; i++) {
        const square = document.createElement('span');
        square.setAttribute("class", "box");
        square.addEventListener("mouseover", e => {
            if (e.target.getAttribute("class") === "box") {
                e.target.style.background = `rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
                e.target.setAttribute("class", "filledBox");
                
            } 
            
            //console.log(e.target);
        });
        row.appendChild(square);
    }
    container.appendChild(row);

}
//sets the full grid on the sketchpad
function setGrid(num) {
    container.textContent = "";
    for (let i = 0; i < num; i++) {
        setRow(num);
    }
}
//Resets Grid
function resetGrid() {
    setGrid(num);
}
reset.addEventListener('click', resetGrid);
setSize.addEventListener('click', () => {
    let size = prompt("Please enter a number between 2 and 100 to set the grid size.");
    console.log(parseInt(size) > 100);
    while (isNaN(parseInt(size)) || parseInt(size) < 2 || parseInt(size) > 100) {
        size = prompt("Invalid response. Please enter a number between 2 and 100 to set the grid size.");
    }

    num = parseInt(size);
    setGrid(num);
})
setGrid(16);