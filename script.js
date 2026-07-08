 import {createBoard} from "./static/js/board.js";
 import {pieceset} from "./static/js/pieceset.js"
 import {showState} from "./static/js/state.js"
 let board=createBoard();
 document.addEventListener("click",function(e){
     console.log(e.target.id);
 }

)
showState();



                    

