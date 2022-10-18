const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd",
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    externals: {
        react: 'react',
        "react-dom": 'react-dom',
        "react-router-dom": 'react-router-dom',
        "@types/react-router-dom": "@types/react-router-dom",
        mobx: "mobx",
        "mobx-react-lite": "mobx-react-lite",
        i18next: "i18next",
        "react-i18next": "react-i18next",
        "mobx-react": "mobx-react"
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ],
    }
}