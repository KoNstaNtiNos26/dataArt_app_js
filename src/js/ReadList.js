import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReadBook } from "./ReadBook";
import { getFromStore, mark, remove } from "./store/toReadList/middleware";
import { BOOK_CLASSNAME } from "./util/const";

export const ReadList = () => {
  const dispatch = useDispatch();
  const readList = useSelector((state) => state.readList);

  const clickHandler = useCallback((e) => {
    const selectBook = e.target.closest(`.${BOOK_CLASSNAME}`);
    const buttonValue = e.target.value;
    switch (buttonValue) {
      case "read": dispatch(mark(selectBook.dataset.key));
        break;
      case "remove": dispatch(remove(selectBook.dataset.key));
        break;
    }
  });

  useEffect(() => {
    dispatch(getFromStore());
  }, [Object.values(readList).length]);

  return (
    <div onClick={clickHandler} className="column__list column__list_long">
      {Object.values(readList).map((book) => (
        <ReadBook
          id={book.id}
          key={book.id}
          title={book.title}
          subTitle={book.subTitle}
          languages={book.languages}
          isRead={book.read}
        />
      ))}
    </div>
  );
};
