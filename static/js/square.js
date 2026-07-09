import { createBoard } from "./board.js";
export function square(s){
    let arr=s;
    let x=arr[0];
    let y=arr[1];
    let b=createBoard();
    return b[x-1][y-1];

}