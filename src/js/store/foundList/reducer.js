import {FOUND_LIST, IS_FOUNDED} from "./types";

const initState = {
    query: "",
    page: 0,
    countOfAll: 0,
    list: []
}

export const addListReducer = (state = initState, action) => {
    switch (action.type) {
        case FOUND_LIST: {
            if(action.page === 1) return {
                query: action.query,
                page: action.page,
                list: action.payload,
                countOfAll: action.countOfAll
            }
            else return {
                ...state,
                page: action.page,
                list: [
                    ...state.list,
                    ...action.payload
                ]
            }
        }
        default: return state;
    }
}

export const isFoundedReducer = (state = {found: false}, action) => {
    switch (action.type) {
        case IS_FOUNDED: {
            return {found: action.flag};
        }
        default: return state;
    }
};