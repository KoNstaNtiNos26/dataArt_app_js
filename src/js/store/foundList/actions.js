import {FOUND_LIST, IS_FOUNDED} from "./types";

export const anotherList = (list, query, page, countOfAll) =>({
    type: FOUND_LIST,
    payload: list,
    query,
    page,
    countOfAll
});

export const isFounded = (flag) => ({
    type: IS_FOUNDED,
    flag
});

