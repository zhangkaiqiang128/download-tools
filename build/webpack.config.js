const path = require('path');

module.exports = {
    entry: './src/download-tools.ts',
    output: {
        path: path.resolve(__dirname, '..', 'lib'),
        filename: "download-tools.js"
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    }
}
