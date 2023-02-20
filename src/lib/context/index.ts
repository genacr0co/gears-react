import {createContext} from 'react'

import GearStore from "../stores/GearStore";

interface State {
    gearStore: GearStore,
}
export const gearStore = new GearStore();

export const GearContext = createContext<State>({
    gearStore,
})
