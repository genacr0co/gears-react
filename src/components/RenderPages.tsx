import React from "react";
import {TPages} from "../lib/types/TPages";

type Props = {
    pages: TPages,
}

const RenderPages = ({pages}: Props) => {
    return (<React.Fragment>
        {pages.map((page, index) => {
            return <React.Fragment key={index}>
                {page}
            </React.Fragment>
        })}
    </React.Fragment>)
}
export default RenderPages;