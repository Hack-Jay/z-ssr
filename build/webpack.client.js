const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.common')

const clientConfig = {
    mode: 'development',
    entry: path.join(__dirname, '../src', 'client/index.js'),
    output: {
        path: path.join(__dirname, '../dist/static'),
        filename: "index.js",
        publicPath: 'http://localhost:9000/'
    },
    devtool: 'source-map',
    devServer: {
        quiet: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },  
        contentBase: path.join(__dirname, '../dist/static'),
        publicPath: 'http://localhost:9000/',
        hot: true,
        compress: true,
        inline: true,
        port: 9000,
        host: 'localhost',
        watchOptions: {
            ignored: /node_modules/,
            aggregateTimeout: 500,
            poll: 500
        }
    },
    module: {
        rules: [
            {
                test: /\.css?$/,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                // localIdentName: '[name]_ [local]_[hash:base64:5]'
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                            // modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]

}

module.exports = merge(baseConfig, clientConfig)