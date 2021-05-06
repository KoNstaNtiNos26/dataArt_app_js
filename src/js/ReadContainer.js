import React from "react";
import {ReadInfo} from "./ReadInfo";
import {ReadList} from "./ReadList";

export const ReadContainer = () => {
    return (
        <div className="column">
                <ReadInfo />
                <ReadList />
            </div>
    );
};