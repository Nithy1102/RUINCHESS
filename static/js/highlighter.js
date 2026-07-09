import {showState} from "./state.js";
import {createBoard} from "./board.js";
import { coordinates } from "./coordinates.js";
import { pawn } from "./pawn.js";
export function handlerGame(selected_id,alreadySelected){
    let p=document.getElementById(selected_id);
    console.log(selected_id,alreadySelected);
    let s=coordinates(selected_id);
    console.log(s.piece);
    if(alreadySelected==null && s.piece!="None"){
     
     if(s.piece.type=="pawn"){
       let l=pawn(s);
       l.forEach(e =>{
        if(e){e.classList.add("has_dot")}
       });
     }

     p.classList.add('selected');
     alreadySelected=selected_id;
    }
    else if(selected_id&&s.piece!="None"){
        if (selected_id==alreadySelected){
            p.classList.remove("selected");
            alreadySelected=null;
        }
    
    
   else{
    p.classList.add("selected");
    let k=document.getElementById(alreadySelected);
    k.classList.remove("selected");
    alreadySelected=selected_id;
   }
}
else if(s.piece=="None"){
    let k=document.getElementById(alreadySelected);
    k.classList.remove("selected");
    alreadySelected=null;
}

    return alreadySelected;
}