import {observer} from "mobx-react-lite";
import React, {useContext} from "react";
import {GearContext} from "../context";

const log = (id: string, ...args: any) => {

    const {gearStore} = useContext(GearContext);

    gearStore.console.getLogs()?.some((e) => {
        if (e === id) {
            console.log(...args)
        }
    })

    return <></>
}

export default observer(log);