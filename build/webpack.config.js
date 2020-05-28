const path = require('path');

module.exports = {
    entry: './src/export-tools.ts',
    output: {
        path: path.resolve(__dirname, '..', 'lib'),
        filename: "export-tools.js"
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
