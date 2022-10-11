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
        "react-dom": "ReactDOM",
        'mobx': "mobx",
        'mobx-react-lite': "mobxReactLite",
        'i18next': "i18next",
        "react-i18next": "reactI18next"
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