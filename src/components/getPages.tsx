import React from "react";
import Page from "./Page";
import ITemplate from "../models/ITemplate";

const getPages = (arrays: [string, ITemplate[]][]) => {
    return arrays.map(([path, templates]) => ({path: path, element: <Page templates={templates}/>}))
}

export default getPages;