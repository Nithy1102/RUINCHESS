
import { square } from "./square.js";
export function coordinates(value){
    const [x,y]=value.split('-').map(Number);
    let a=[x,y];
    let s=square(a)
    return s;
}