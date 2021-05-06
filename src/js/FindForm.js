import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAnotherList } from "./store/foundList/middleware";
import {isFounded} from "./store/foundList/actions";
import { DEBOUNCE_TIME } from "./util/const";

export const FindForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  const dispatch = useDispatch();

  const handleChange = useCallback((e) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(() => {
      setInputValue(e.target.value);
    }, DEBOUNCE_TIME);
    setTimeoutId(id);
  });

  const handleSubmit = useCallback((e) => {
      e.preventDefault();
  });

  useEffect(() => {
    dispatch(getAnotherList(inputValue, 1));
  }, [inputValue]);

  return (
    <form onChange={handleChange} onSubmit={handleSubmit} className="column__block column__block_column">
      <input type="text" className="column__input"></input>
    </form>
  );
};


