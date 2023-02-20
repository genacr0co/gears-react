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

Also you have to add following parameter to `tsconfig.json`:
```json
    "compilerOptions": {
        "experimentalDecorators": true, // this one
        ...
    }
```