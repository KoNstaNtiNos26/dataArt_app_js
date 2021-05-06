import {SELECTED} from "./types";

export const anotherId = (id) =>({
    type: SELECTED,
    payload: id
});