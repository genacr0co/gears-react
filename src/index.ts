import React from 'react'

export const RenderPages = React.lazy(() => import('./components/RenderPages')); // ?
export {Routing} from './components/Routing';
export {getRoutes} from './components/getRoutes';

export {useLocalStorage} from './lib/hooks/useLocalStorage';

export {default as i18n} from './lib/i18n/i18n';

export type {ILang} from './lib/types/ILang';
export type {IRoute} from './lib/types/IRoute';
export type {TPages} from './lib/types/TPages';
export type {TGetPages} from './lib/types/TGetPages';

export {withGears} from './lib/providers/with-gears';

export {default as GearStore} from './lib/stores/GearStore';
export {default as ServiceStore} from './lib/stores/sub_stores/ServiceStore';

export {default as OpenAPI} from './lib/stores/sub_stores/OpenAPI';



