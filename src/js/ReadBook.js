import React from "react";

export const ReadBook = ({ author, title, subTitle, languages, isRead, id }) => {
  return (
    <div className={isRead ? "book book_read" : "book"} data-key={id}>
      <div>
        <div className="text">{title}</div>
        {languages && (
          <div className="text">({languages.join(", ")})</div>
        )}
      </div>
      {subTitle && <div className="text">{subTitle}</div>}
      <div className="text">{author}</div>
      {!isRead && (
        <div>
          <button value="read" className="button">Mark as read</button>
          <button value="remove" className="button">Remove from list</button>
        </div>
      )}
    </div>
  );
};
