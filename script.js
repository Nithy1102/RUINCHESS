const board = document.getElementById("board");
for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
        const cell = document.createElement("div");
        if ((r + c) % 2 === 0) {
            cell.classList.add("light");
        } else {
            cell.classList.add("dark");
        }
        board.appendChild(cell);
    }
}