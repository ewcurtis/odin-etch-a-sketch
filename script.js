const container = document.querySelector("#container");

//sets the row on the sketchpad
function setRow(num) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let i = 0; i < num; i++) {
        const square = document.createElement('span');
        square.setAttribute("class", "box");
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

setGrid(2);