
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
const boardData=[
                  ["bR","bN","bB","bQ","bK","bB","bN","bR"],
                  ["bP","bP","bP","bP","bP","bP","bP","bP"],
                  [null,null,null,null,null,null,null,null],
                  [null,null,null,null,null,null,null,null],
                  [null,null,null,null,null,null,null,null],
                  [null,null,null,null,null,null,null,null],
                  ["wP","wP","wP","wP","wP","wP","wP","wP"],
                  ["wR","wN","wB","wQ","wK","wB","wN","wR"] ];
                  [{piece:symbols["wP"]},{piece:symbols["wP"]},{piece:symbols["wP"]},{piece:symbols["wP"]},{piece:symbols["wP"]},{ piece:symbols["wP"] },{ piece:symbols["wP"] },{ piece:symbols["wP"] }],
                  [{ piece:symbols["wR"] },{ piece:symbols["wN"] },{ piece:symbols["wB"] },{ piece:symbols["wQ"] },{ piece:symbols["wK"] },{ piece:symbols["wB"] },{ piece:symbols["wN"] },{ piece:symbols["wR"] }] ;
function createBoard() {
const board = document.getElementById("board");
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
        board.appendChild(cell);
    }
}}


function renderpieces() {
const board = document.getElementById("board");

for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
        const cell = board.children[r * 8 + c];
        if (boardData[r][c]) {
            cell.textContent = symbols[boardData[r][c]];
        }
    }
}
}
createBoard();
renderpieces(); 