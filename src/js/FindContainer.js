import React, { useCallback, useState } from "react";
import { FindForm } from "./FindForm";
import { FoundList } from "./FoundList";
import { Info } from "./Info";
import {CustomSpinner} from "./Spinner";
import {useSelector} from "react-redux";

export const FindContainer = () => {

    const isFounded = useSelector((state) => state.isFounded);

    return (<div className="column">
                <FindForm />
                <FoundList />
                <CustomSpinner visible={isFounded.found}/>
                <Info />
            </div>);
}