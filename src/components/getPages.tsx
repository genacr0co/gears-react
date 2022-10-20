import React from "react";
import TGetPages from "../models/TGetPages";
import Page from "./Page";

const getPages = (arrays: TGetPages[]) => {
    return arrays.map(([path, templates]) => ({path: path, element: <Page templates={templates}/>}))
}

export default getPages;