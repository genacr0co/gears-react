import components from "./components";
import React from "react";
import ITemplate from "../models/ITemplate";
import {observer} from "mobx-react-lite";

type Props = {
    templates: ITemplate[],
}

const Page = ({templates}: Props) => {
    return (<>{components.get(templates)}</>)
}

export default observer(Page);