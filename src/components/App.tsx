import React from 'react';
import {observer} from "mobx-react-lite";
import RenderRoutes from "./renderRoutes";
import {BrowserRouter} from "react-router-dom";
import {IRoute} from "../models/IRoute";
import {GearContext} from '../context';
import GearStore from "../stores/GearStore";

type Props = {
    routers: IRoute[];
}

const gearStore = new GearStore();

const App = ({routers}: Props) => {
    return (<BrowserRouter>
        <GearContext.Provider value={{gearStore}}>
            <RenderRoutes routers={routers}/>
        </GearContext.Provider>
    </BrowserRouter>)
}

export default observer(App);