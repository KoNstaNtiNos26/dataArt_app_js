import {
  TO_READ_ADD,
  TO_READ_ADD_ALL,
  TO_READ_DONE,
  TO_READ_REMOVE,
} from "./types";

export const addReducer = (state = {}, action) => {
  switch (action.type) {
    case TO_READ_ADD_ALL: {
      return action.payload;
    }
    case TO_READ_ADD: {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    }
    case TO_READ_DONE: {
      return {
        ...state,
        [action.payload]: { ...state[action.payload], read: true },
      };
    }
    case TO_READ_REMOVE: {
      const copy = {...state};
      delete copy[action.payload];
      return copy;
    }
    default:
      return state;
  }
};
