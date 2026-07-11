import { square } from "./square.js";
export function coordinates(value) {
    if (value == null) {
        return null;
    }
    const [x, y] = value.split('-').map(Number);
    let a = [x, y];
    let s = square(a)
    return s;
}