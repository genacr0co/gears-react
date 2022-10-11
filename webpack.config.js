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
        react: 'commonjs react',
        "react-dom": 'commonjs react-dom',
        "react-router-dom": 'commonjs react-router-dom',
        "@types/react-router-dom": "commonjs @types/react-router-dom",
        mobx: "commonjs mobx",
        "mobx-react-lite": "commonjs mobx-react-lite",
        i18next: "commonjs i18next",
        "react-i18next": "commonjs react-i18next"
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