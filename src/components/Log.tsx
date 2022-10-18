import React from "react";
import GearStore from "../stores/GearStore";

const log = (id: string, ...args: any) => {

    const gearStore = new GearStore();

    gearStore.console.getLogs()?.some((e) => {
        if (e === id) {
            console.log(...args)
        }
    })

}

export default log;