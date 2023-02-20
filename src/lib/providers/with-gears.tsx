import React from 'react';

import {GearContext} from '../context';
import GearStore from "../stores/GearStore";

const gearStore = new GearStore();

export const withGears = (component: () => React.ReactNode) => () => (
    <GearContext.Provider value={{gearStore}}>
        {component()}
    </GearContext.Provider>
);