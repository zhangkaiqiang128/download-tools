const config = require('./webpack.config');
const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
    mode: 'development',
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ]
})
