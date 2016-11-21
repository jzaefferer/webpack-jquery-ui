var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var GlobalizePlugin = require('globalize-webpack-plugin');

module.exports = {
	entry: {
		main: './index.js'
	},
	output: {
		path: './dist',
		filename: 'app.[hash].js'
	},
	externals: {
		'globalize-locales': 'var {}',
		'globalize/date': 'var {}'
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
		new GlobalizePlugin({
			// toggle this for actual production builds
			production: false,
			developmentLocale: "de",
			supportedLocales: [ "de" ],
			output: "globalize-compiled-data-[locale].[hash].js"
		}),
		new HtmlWebpackPlugin({
			title: 'jQuery UI Autocomplete demo, built with webpack'
		})
	]
};
