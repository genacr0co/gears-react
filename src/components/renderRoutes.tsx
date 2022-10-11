import {Route, Routes} from "react-router-dom";
import * as React from "react";
import {IRoute} from "../models/IRoute";

type Props = {
    routers: IRoute[];
}

function RenderRoutes({routers}: Props) {
    return (
        <React.Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                {routers.map((route: IRoute) =>
                    <Route
                        element={route.element}
                        path={route.path}
                        key={route.path}
                    />
                )}
            </Routes>
        </React.Suspense>
    )
}

export default RenderRoutes;