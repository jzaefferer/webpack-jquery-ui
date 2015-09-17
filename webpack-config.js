var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: './index.js'
	},
	output: {
		path: './dist',
		filename: 'app.[hash].js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test: /\.(jpg|png)$/,
				loader: 'file'
			},
		]
	},
	plugins: [
		new Clean(['dist']),
		new ExtractTextPlugin("app.[hash].css"),
		new HtmlWebpackPlugin({
			title: 'jQuery UI Autocomplete demo, built with webpack'
		})
	]
};
