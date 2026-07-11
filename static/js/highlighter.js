import { showState } from "./state.js";
import { createBoard } from "./board.js";
import { coordinates } from "./coordinates.js";
import { pawn } from "./pawn.js";
export function handlerGame(selected_id, alreadySelected) {
    let p = document.getElementById(selected_id);
    console.log(selected_id, alreadySelected);
    let s = coordinates(selected_id);
    let as = coordinates(alreadySelected);
    console.log(s.piece);
    if (alreadySelected == null && s.piece != "None") { //if no squares are selected
        if (s.piece.type == "pawn") {
            let l = pawn(s);
            l.forEach((e) => {
                if (e) {
                    e.classList.add("has_dot");
                }
            });
        }
        p.classList.add("selected");
        alreadySelected = selected_id;
    } else if (selected_id && s.piece != "None") { //if already a square is selected
        if (selected_id == alreadySelected) {
            if (s.piece.type == "pawn") {
                let l = pawn(s);
                l.forEach((e) => {
                    if (e) {
                        e.classList.remove("has_dot");
                    }
                });
            }
            p.classList.remove("selected");
            alreadySelected = null;
        } else {
            if (s.piece.type == "pawn") {
                let l = pawn(s);
                l.forEach((e) => {
                    if (e) {
                        e.classList.add("has_dot");
                    }
                });
            }

            p.classList.add("selected"); //selecting current pawn and deselecting previous pawn 
            let k = document.getElementById(alreadySelected);
            let ks = coordinates(alreadySelected);
            if (ks.piece.type == "pawn") {
                let l = pawn(ks);
                l.forEach((e) => {
                    if (e) {
                        e.classList.remove("has_dot");
                    }
                });
            }
            k.classList.remove("selected");
            alreadySelected = selected_id;
        }
    } else if (as.piece.type == "pawn" && pawn(as).includes(document.getElementById(selected_id))) { //selecting a pawn coordinate to move a pawn
    } else if (s.piece == "None") { //deselecting current piece by touching a no piece square 
        let k = document.getElementById(alreadySelected);
        let ks = coordinates(alreadySelected);
        if (ks.piece.type == "pawn") {
            let l = pawn(ks);
            l.forEach((e) => {
                if (e) {
                    e.classList.remove("has_dot");
                }
            });
        }
        k.classList.remove("selected");
        alreadySelected = null;
    }

    return alreadySelected;
}