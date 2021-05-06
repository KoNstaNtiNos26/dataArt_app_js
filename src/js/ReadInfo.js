import React from "react";
import {useSelector} from "react-redux";

export const ReadInfo = () => {

    const readList = useSelector((state) => state.readList);

    return <div className="column__block column__block_column">
        <div className="text">To read list...</div>
        <div className="text">{Object.values(readList).length} books, {Object.values(readList).filter(item => item.read).length} read</div>
    </div>;
}