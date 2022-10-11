import React from "react";
import {ITemplate} from "../models/ITemplate";

function get(template: ITemplate, key: number) {
    return (<React.Fragment key={key}>
            {template?.header}
            {template.body}
            {template?.footer}
        </React.Fragment>
    );
}

export const components = {
    get(components: ITemplate[]) {
        return components.map((component, index) => get(component, index))
    },
}