# Getting Started with GEARS-REACT
p.s. The documentation is not complete, I will supplement it as soon as possible.

## Installing

Your React project must have [TypeScript](https://create-react-app.dev/docs/adding-typescript/) installed!

Using npm:

```bash
npm i gears-react
```

After that, the following packages will be automatically installed in your project:

`react-router-dom`
`i18next`
`mobx`
`mobx-react`
`mobx-react-lite`
`react-i18next`

## 1. Gear Component

You should add this to your `src/index.tsx`:

```js
<Observer>
    {() => <Gear routers={routers}/>}
</Observer>
```

### Example

`src/index.tsx`

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Observer} from 'mobx-react'
import {Gear} from 'gears-react';
import {routers} from "./routers";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Observer>
            {() => <Gear routers={routers}/>}
            {/* The`routers` is function that should return us the routes: */}
        </Observer>
    </React.StrictMode>
);
```

## 2. How to create routers with `getPages()` and `routes_template()`


1. The `getPages()` is function that return us the array of routes like following. In `getPages([ ... ])` we need to enter an array with 2 elements, first one is the path and the second is the template.
2. The `routes_template()` is a ready-made template from gears-react. It accepts other routers in the parameters. The `path` must end with `/*` or the `routes_template` won't work. In this way we can make nested paths.  

```js
export const routers_name = getPages([
    ['*', error_template],
    ['/', your_template],
    ['/sub_routes/*', routes_template(sub_routes)] // optional
])
```


### Examples

`./routers.tsx`

```js
import React from "react";
import {getPages, routes_template} from "gears-react";
import {sub_routes} from "./sub_routes";
import home_template from "./home_template";
import error_template from "./error_template";

export const routers = getPages([
    ['*', error_template],
    ['/', home_template],
    ['/sub_routes/*', routes_template(sub_routes)]
])
```
`./sub_routes.tsx`

```js
import {getPages} from "gears-react";
import React from "react";
import error_template from "./error";
import sub_page from "./sub_page";

export const sub_routes = getPages([
    ['*', error_template],
    ['/', sub_page],
])
``` 

### Complex Routers Example

You can also make more complex routers that take parameters for example

```js
import React from "react";
...

export const main_routers = (store: Store) => {

    const array = [
        ['/', home],
        ['/products/*', routes_template(product_routers)],
        ['/product_categories/*', routes_template(product_categories_routers)],
        ['/product_types/*', routes_template(product_types_routers)],
        ['/features/*', routes_template(features_routers)],
        ['/base_feature/*', routes_template(base_feature_routers)],
        ['/official_fields/*', routes_template(official_fields_routers)],
        ['/manufacturers/*', routes_template(manufacturers_routers)],
        ['/regions/*', routes_template(regions_routers)],
        ['/region_types/*', routes_template(region_types_routers)],
    ]

    function allow() {...}

    let pages = allow();
    pages.push(['*', error])
    return getPages(pages)
}
``` 

## 3. How to create template using `ITemplate` interface

There are different ways to create templates, but the main structure of a template is

```js
[{body: <div>Your TSX Component</div>}]
``` 


### Examples

`./error_template.tsx`

```js
import React from "react";
import {ITemplate} from "gears-react";

const template: ITemplate = {
    body: <div>Error</div>
}

export default [template]
```

`./sub_page.tsx`

```js
import React from "react";
import {ITemplate} from "gears-react";

const template: ITemplate = {
    body: <div>Sub Routes main template</div>
}

export default [template]
```

`./home_template.tsx`

```js
import React, {useEffect, useState} from "react";
import {ITemplate} from "gears-react";
import {useNavigate} from "react-router-dom";

type HeaderProps = {
    title: string;
}

const Body = ({title}: HeaderProps) => {
    const [example_value, setExampleValue] = useState<number>(0);
    const navigate = useNavigate();

    function handleClick() {
        setExampleValue(example_value + 1)
    }

    return <>
        <div style={{
            margin: '10px 0'
        }}>
            <h1>example_value: {example_value}</h1>
            <button onClick={handleClick}>example_value + 1</button>
            <h1>{title}</h1>
            <button onClick={() => navigate('/sub_routes')}>Navigate to /sub_routes</button>
        </div>
    </>
}

const template: ITemplate = {
    header: <div style={{background: '#dbdec2'}}>Header</div>, //optional
    body: <Body title={'Example Title'}/>,  //required
    footer: <div style={{background: '#cbd8e8'}}>Footer</div>  //optional
}

export default [template]
```

### Slightly more complex examples

```js
import ...

const template: ITemplate = {
    header: <MyRow>
        <FlexRow>
            <BackButton to={'/region_types/list'} tooltip={'Обратно'}/>
            <h2>Create Region Type</h2>
        </FlexRow>
    </MyRow>,
    body: <CreateRegionType/>
}

export const create = [template]
```
or
```js
import ...

const template: ITemplate = {
    body: <>
        <EditProduct/>
        <UploadProductImages/>
    </>
}

export const edit = [template]
```

## 4. Other Staff of gears-react
I will describe them as soon as possible.

```js
<Page templates={your_template}/> //I use in gears... For example in `getPages`
```

```js
components.get(your_template) //I use in gears... For example in `Page`
```

```js
<RenderRoutes templates={your_template}/> //I use in gears... For example in `Gear`
```

### Stores of gears-react

`GearStore` | `LangStore` | `AlertStore` | `Loader` | `StringValueStore` | `LogsStore`

### Hooks
`useLocalStorage`

### i18n plugin 

`i18n`

### Types and Interfaces

`ILang` | `IRoute` | `ITemplate`