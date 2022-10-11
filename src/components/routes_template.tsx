import React from 'react';
import RenderRoutes from "./RenderRoutes";
import Page from "./Page";
import IRoute from "../models/IRoute";
import ITemplate from "../models/ITemplate";

const routes_template = (routers: IRoute[], templates?: ITemplate[]) => {

    const template: ITemplate = {
        body: templates !== undefined ? <Page templates={templates}/> : <></>
    }

    const routers_template: ITemplate = {
        body: <RenderRoutes routers={routers}/>
    }

    return [template, routers_template];
}

export default routes_template;