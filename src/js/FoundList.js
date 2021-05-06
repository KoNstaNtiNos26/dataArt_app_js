import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BookRow } from "./BookRow";
import { getAnotherList } from "./store/foundList/middleware";
import { anotherId } from "./store/selectedBook/actions";
import { BOOK_CLASSNAME } from "./util/const";


export const FoundList = () => {
  const foundList = useSelector((state) => state.data);
  
  const dispatch = useDispatch();

  const scrollHandler = useCallback((e) => {
    if (
      e.nativeEvent.target.scrollHeight - e.nativeEvent.target.scrollTop <=
        e.nativeEvent.target.offsetHeight &&
      foundList.list.length < foundList.countOfAll
    ) {
      const nextPage = ++foundList.page;
      dispatch(getAnotherList(foundList.query, nextPage));
      console.log("new request");
    }
  });

  const clickHandler = useCallback((e) => {
    const selectBook = e.target.closest(`.${BOOK_CLASSNAME}`);
    dispatch(anotherId(selectBook.dataset.key));
  });

  return (
    <div onScroll={scrollHandler} onClick={clickHandler} className="column__list">
        {foundList.list.map((row) => (
          <BookRow
            id={row.id}
            key={row.id}
            title={row.title}
            subTitle={row.subTitle}
            languages={row.languages}
          />
        ))}
        
    </div>
  );
};

//.target.scrollHeight
//.target.scrollTop
