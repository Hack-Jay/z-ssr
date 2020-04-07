const path = require("path");
const nodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.common");

const serverConfig = {
	target: "node",
	mode: "development",
	entry: path.join(__dirname, "../src", "server/index.js"),
	externals: [nodeExternals()],
	output: {
		path: path.join(__dirname, "../dist"),
		filename: "bundle.js",
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					"isomorphic-style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							// modules: {
							// 	localIdentName: "[name]_ [local]_[hash:base64:5]",
                            // },
                            modules: true
						},
					},
				],
			},
		],
	},
};

module.exports = merge(baseConfig, serverConfig);
