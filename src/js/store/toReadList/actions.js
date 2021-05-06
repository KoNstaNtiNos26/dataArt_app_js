import {TO_READ_ADD, TO_READ_ADD_ALL, TO_READ_DONE, TO_READ_REMOVE} from "./types";

export const addToRead = (item) => ({
    type: TO_READ_ADD,
    payload: item
});

export const addAllToRead = (items) => ({
    type: TO_READ_ADD_ALL,
    payload: items
});

export const markAsRead = (id) => ({
    type: TO_READ_DONE,
    payload: id
});

export const removeFromRead = (id) => ({
    type: TO_READ_REMOVE,
    payload: id
});