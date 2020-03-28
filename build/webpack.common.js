const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.json', '.js', '.jsx'],
    },
    module: {
        rules: [{
            test: /\.(js|jsx)?$/,
            exclude: [
                path.resolve(__dirname, '../node_modules')
            ],
            loader: 'babel-loader',
            options: {
                presets: [
                    ["@babel/preset-react"],
                    ["@babel/env", {
                        "targets": {
                            "browsers": "last 2 chrome versions"
                        }
                    }]
                ],
                plugins: [
                    ["react-hot-loader/babel"]
                ]
            }
        }]
    }
}