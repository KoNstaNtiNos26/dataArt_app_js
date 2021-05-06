import { createStore, combineReducers, applyMiddleware } from "redux";
import {addListReducer, isFoundedReducer} from "./foundList/reducer";
import {addReducer, markAsReadReducer, removeReducer} from "./toReadList/reducer";
import {selectReducer} from "./selectedBook/reducer";

import thunk from "redux-thunk";

export const store = createStore(combineReducers({
    data: addListReducer,
    selected: selectReducer,
    isFounded: isFoundedReducer,
    readList: addReducer,
    // toRead: addToReadReducer,
    // done: markAsReadReducer,
    // remove: removeReducer
}), applyMiddleware(thunk));