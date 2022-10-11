import React from 'react';
// import {observer} from "mobx-react-lite";
import RenderRoutes from "./RenderRoutes";
import {BrowserRouter} from "react-router-dom";
import {GearContext} from '../context';
import GearStore from "../stores/GearStore";
import IRoute from "../models/IRoute";

type Props = {
    routers: IRoute[];
}

const Gear = ({routers}: Props) => {
    const gearStore = new GearStore();
    console.log(routers)

    return (
        <BrowserRouter>
            <GearContext.Provider value={{gearStore}}>
                {/*<RenderRoutes routers={routers}/>*/}
                GearApp
            </GearContext.Provider>
        </BrowserRouter>
    )
}

export default Gear;