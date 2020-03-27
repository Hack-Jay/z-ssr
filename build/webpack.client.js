const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.common')

const clientConfig = {
    mode: 'development',
    entry: path.join(__dirname, '../src', 'client/index.js'),
    output: {
        path: path.join(__dirname, '../dist/static'),
        filename: "index.js",
    },
}

module.exports = merge(baseConfig, clientConfig)