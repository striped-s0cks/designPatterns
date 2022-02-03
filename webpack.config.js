const path = require('path');

module.exports = {
    // multiple entry points
    // format = [output path]: [input path]
    entry: {
        './SimUDuck/dist/bundle': './SimUDuck/src/index.ts'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname + '/')
    }
};