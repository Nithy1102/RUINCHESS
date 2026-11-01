const boardElement = document.getElementById("board");
const symbols = {
    "bR": "♜",
    "bN": "♞",
    "bB": "♝",
    "bQ": "♛",
    "bK": "♚",
    "bP": "♟",
    "wR": "♖",
    "wN": "♘",
    "wB": "♗",
    "wQ": "♕",
    "wK": "♔",
    "wP": "♙"
};
let selected = null;
let currentTurn = "w"; 
const boardData=[
                  ["bR","bN","bB","bQ","bK","bB","bN","bR"],
                  ["bP","bP","bP","bP","bP","bP","bP","bP"],
                  [null,null,null,null,null,null,null,null],
                  [null,null,null,null,null,null,null,null],
                  [null,null,null,null,null,null,null,null],
                  [null,null,null,null,null,null,null,null],
                  ["wP","wP","wP","wP","wP","wP","wP","wP"],
                  ["wR","wN","wB","wQ","wK","wB","wN","wR"] ];

function createBoard() {
   for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
        const cell = document.createElement("div");
        cell.dataset.row = r;
        cell.dataset.col = c;
        cell.classList.add("square");
        if ((r + c) % 2 === 0) {
            cell.classList.add("light");
        } else {
            cell.classList.add("dark");
        }
        boardElement.appendChild(cell);
    }
}
}


function renderPieces() {
    const statusDiv = document.getElementById("status");
    statusDiv.textContent = `Turn: ${currentTurn === "w" ? "White" : "Black"}`;
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const cell = boardElement.children[r * 8 + c];

            cell.textContent = boardData[r][c]
                ? symbols[boardData[r][c]]
                : "";

            cell.classList.toggle(
                "selected",
                selected !== null &&
                selected.row === r &&
                selected.col === c
            );
        }
    }
}
createBoard();
renderPieces(); 
boardElement.addEventListener("click", function (event) {
    const cell = event.target.closest(".square");

    if (!cell ) return;
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);

    
    if (selected === null) {
        

        if (boardData[row][col] === null ) return;
        if (boardData[row][col][0] !== currentTurn) return;
        selected = { row, col };
        renderPieces();
        return;
    }

    if (selected.row === row && selected.col === col) {
        selected = null;
        renderPieces();
        return;
    }
    if (boardData[row][col] !== null && boardData[row][col][0] === currentTurn) {
        selected = { row, col };
        renderPieces();
        return;
    }

    const piece = boardData[selected.row][selected.col];

    boardData[row][col] = piece;
    boardData[selected.row][selected.col] = null;

    selected = null;
    currentTurn = currentTurn === "w" ? "b" : "w";
    renderPieces();
});

