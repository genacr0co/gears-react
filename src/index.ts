import React from 'react'

export const Page = React.lazy(() => import('./components/Page'));
export {default as RenderRoutes} from './components/renderRoutes';
export {default as getPages} from './components/getPages';
export {default as App} from './components/App';
export {default as useLocalStorage} from './hooks/useLocalStorage';
export {default as routes_template} from './components/routes_template';
export {default as i18n} from './components/i18n';

export {default as gearStore} from './stores/GearStore';
export {default as LangStore} from './stores/sub_stores/LangStore';
export {default as AlertStore} from './stores/sub_stores/AlertStore';
export {default as Loader} from './stores/sub_stores/Loader';
export {default as StringValueStore} from './stores/sub_stores/StringValueStore';

export type {default as ILang} from './models/ILang';
export type {default as IRoute} from './models/IRoute';
export type {default as ITemplate} from './models/ITemplate';