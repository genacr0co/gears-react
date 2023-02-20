import React from "react";
import {TGetPages} from "../lib/types/TGetPages";
import {IRoute} from "../lib/types/IRoute";

const RenderPages = React.lazy(() => import('./RenderPages'));


export const getRoutes = (routes: TGetPages[]): IRoute[] => {
    return routes.map(([path, pages]) => ({path: path, element: <RenderPages pages={pages}/>}))
}
