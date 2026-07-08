import {createBoard} from './board.js';
export function showState() {
    let b=createBoard();
    for (const row of b){
        for (const square of row){
            if (square.piece!="None"){
                let p=document.getElementById(`${square.coordinate[0]}-${square.coordinate[1]}`);
                let img=document.createElement("img");
                img.src=square.piece.image;
                p.classList.add("piece");
                p.appendChild(img);
            }
        }
    }   
}
            
