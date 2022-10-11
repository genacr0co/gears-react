import React from "react";
import Page from "./Page";

const getPages = (arrays: any[]) => {
    return arrays.map(([path, templates]) => ({path: path, element: <Page templates={templates}/>}))
}

export default getPages;