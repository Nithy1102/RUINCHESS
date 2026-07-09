import {pieces} from "./pieces.js"

export function createBoard(){
let board=[]
let b=document.querySelector(".board");
for(let i=1;i<9;i++){
    let row=[]
    for (let j=1;j<9;j++) {
      const p=document.createElement("div");
      p.id=`${i}-${j}`;
      p.classList.add("square");
       let square={
         coordinate:[i,j],
         piece:"None"
       }
        if((i+j)%2!=0){

            p.classList.add("black");
        }
        else{
            p.classList.add("white");
        }
        b.appendChild(p);
        row.push(square)
    }
    board.push(row)
}
let piece=pieces();

board[0][0].piece=piece[0];
board[0][1].piece=piece[1];
board[0][2].piece=piece[2];
board[0][3].piece=piece[3];
board[0][4].piece=piece[4];
board[0][5].piece=piece[5];
board[0][6].piece=piece[6];
board[0][7].piece=piece[7];
board[1][0].piece=piece[8];
board[1][1].piece=piece[9];
board[1][2].piece=piece[10];
board[1][3].piece=piece[11];
board[1][4].piece=piece[12];
board[1][5].piece=piece[13];
board[1][6].piece=piece[14];
board[1][7].piece=piece[15];
board[6][0].piece=piece[24];
board[6][1].piece=piece[25];
board[6][2].piece=piece[26];
board[6][3].piece=piece[27];
board[6][4].piece=piece[28];
board[6][5].piece=piece[29];
board[6][6].piece=piece[30];
board[6][7].piece=piece[31];
board[7][0].piece=piece[16];
board[7][1].piece=piece[17];
board[7][2].piece=piece[18];
board[7][3].piece=piece[19];
board[7][4].piece=piece[20];
board[7][5].piece=piece[21];
board[7][6].piece=piece[22];
board[7][7].piece=piece[23];


return board;

}