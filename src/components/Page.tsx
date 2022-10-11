import {components} from "./components";
import React from "react";
import {ITemplate} from "../models/ITemplate";

type Props = {
    templates: ITemplate[],
}

const Page = ({templates}: Props) => {
    return (<>{components.get(templates)}</>)
}

export default Page;