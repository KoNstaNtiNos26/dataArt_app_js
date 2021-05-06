import React from "react";
import {useSelector} from "react-redux";

export const Info = () => {
    const count = useSelector(state => state.data.countOfAll);
    const foundList = useSelector((state) => state.data);

    return <div className="column__block column__block_column">
        <div className="text">Found: {count}. {foundList.list.length === count ? "Shown all." : ""}</div>
    </div>;
}