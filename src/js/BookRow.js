import React from "react";
import {BOOK_CLASSNAME} from "./util/const";
import {useSelector} from "react-redux";

export const BookRow = ({id, title, languages, subTitle }) => {

  const idFromStore = useSelector(state => state.selected);

  return (
    <div data-key={id} className={idFromStore===id ? BOOK_CLASSNAME + " book_selected": BOOK_CLASSNAME}>
      <div>
        <p className="text">{title}</p>
        {languages && <p className="text">({languages.join(", ")})</p>}
      </div>
      {subTitle && <div className="text">{subTitle}</div>}
    </div>
  );
};
