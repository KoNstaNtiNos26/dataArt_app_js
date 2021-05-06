import {addToRead, addAllToRead, markAsRead, removeFromRead} from "./actions";

export const addToStore = (item) => (dispatch) => {
    if(!localStorage.getItem(item.id)) {
        localStorage.setItem(item.id, JSON.stringify(item));
        dispatch(addToRead(item));
    }
}

export const getFromStore = () => (dispatch) => {
    const keys = Object.keys(localStorage);
    const result = {};
    for(let key of keys) {
        const fromStore = JSON.parse(localStorage.getItem(key));
        result[fromStore.id] = fromStore;
    }
    dispatch(addAllToRead(result));
}

export const mark = (id) => (dispatch) => {
    const item = JSON.parse(localStorage.getItem(id));
    if(!item.read) item.read = true;
    localStorage.setItem(item.id, JSON.stringify(item));
    dispatch(markAsRead(id));
};

export const remove = (id) => (dispatch) => {
    localStorage.removeItem(id);
    dispatch(removeFromRead(id));
};