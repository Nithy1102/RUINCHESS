import { legal } from "./legal.js";
export function pawn(value){
    let s=value;
    let possible=[]
    let c=s.coordinate
    let x=c[0];
    let y=c[1];
    if(s.piece.color=='white'){
       if(s.piece.hasMoved=="none"){
         possible.push([x-2,y])
        }
       possible.push([x-1,y]);
    } 
    if(s.piece.color=='black'){
       if(s.piece.hasMoved=="none"){
         possible.push([x+2,y])
        }
       possible.push([x+1,y]);
    }
    console.log(possible);
    let l=legal(possible);
    return l;

}