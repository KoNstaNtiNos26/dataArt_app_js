import React, { useState } from "react";
import { Provider } from "react-redux";
import { BookInfo } from "./BookInfo";
import { FindContainer } from "./FindContainer";
import { ReadContainer } from "./ReadContainer";
import { store } from "./store";

export const App = () => {

  return (
    <Provider store={store}>
      <div className="row">
        <div className="col-3">
          <FindContainer />
        </div>
        <div className="col-6">
          <BookInfo />
        </div>
        <div className="col-3">
          <ReadContainer />
        </div>
      </div>
    </Provider>
  );
};
