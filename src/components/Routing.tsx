import {Route, Routes} from "react-router-dom";
import * as React from "react";
import {IRoute} from "../lib/types/IRoute";

type Props = {
    routes: IRoute[];
    fallback?: React.ReactNode
}

export function Routing({routes, fallback}: Props) {
    return (
        <React.Suspense fallback={fallback}>
            <Routes>
                {routes.map((route: IRoute, index) =>
                    <Route
                        key={index}
                        element={route.element}
                        path={route.path}
                    />
                )}
            </Routes>
        </React.Suspense>
    )
}