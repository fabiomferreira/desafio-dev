const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry: path.resolve(__dirname, "./src/index.js"),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devServer: {
		static: './dist',
		// contentBase: path.join(__dirname, 'dist'),
		proxy: {
			'/v1': {
				target: 'http://localhost:3001',
				changeOrigin: true,
			},
		}
	},
};