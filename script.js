 import {createBoard} from "./static/js/board.js";
 import {pieceset} from "./static/js/pieceset.js"
 import {showState} from "./static/js/state.js"
 import {handlerGame} from "./static/js/highlighter.js"

 let board=createBoard();
 let alreadySelected=null;
 let currselected_id=null;
 document.addEventListener("click",function(e){
     let selected_id=e.target.id;
     handlerClick(selected_id);
 }
)
function handlerClick(id){
    currselected_id=id;
    alreadySelected=handlerGame(currselected_id,alreadySelected);
}

showState();


                    

