const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.common')

const serverConfig = {
    target: 'node',
    mode: 'development',
    entry: path.join(__dirname, '../src', 'server/index.js'),
    externals: [nodeExternals()],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: "bundle.js",
    },
}

module.exports = merge(baseConfig, serverConfig)