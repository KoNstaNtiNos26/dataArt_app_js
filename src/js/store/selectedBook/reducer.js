import {SELECTED} from "./types";

export const selectReducer = (state = "", action) => {
    switch (action.type) {
        case SELECTED: {
            return action.payload;
        }
        default: return state;
    }
}