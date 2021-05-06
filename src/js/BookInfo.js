import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BookRow } from "./BookRow";
import {addToStore} from "./store/toReadList/middleware";

export const BookInfo = () => {
  const dispatch = useDispatch();
  const idFromStore = useSelector((state) => state.selected);
  const foundList = useSelector((state) => state.data);

  const selectedItem = foundList.list.filter((row) => row.id === idFromStore);
  const clickHandler = useCallback((e) => {
    dispatch(addToStore(selectedItem[0]));
  });

  return selectedItem.map((row) =>
      <div key={row.id} >
        <div className="text text--title">{row.title}</div>
        {row.subTitle && <div className="text">{row.subTitle}</div>}
        {row.languages && (
          <div className="text">
            languages available: {row.languages.join(", ")}
          </div>
        )}
        <div className="text">full text available: {row.fullText}</div>
        <div className="text">first publish year: {row.firstPublish}</div>
        <div className="text">Year published: {row.publishYears.join(", ")}</div>
        <button onClick={clickHandler} className="button">Add book to Read list</button>
      </div>);
};
