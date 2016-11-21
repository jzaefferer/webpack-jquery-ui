var webpack = require( "webpack" );
var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require( 'webpack/lib/optimize/CommonsChunkPlugin' );
var GlobalizePlugin = require('globalize-webpack-plugin');
var nopt = require( "nopt" );

var options = nopt({
	production: Boolean
});

module.exports = {
	entry: options.production ?  {
		main: './index.js',
		vendor: [
			'globalize',
			'globalize/dist/globalize-runtime/number',
			'globalize/dist/globalize-runtime/currency',
			'globalize/dist/globalize-runtime/date',
			'globalize/dist/globalize-runtime/message',
			'globalize/dist/globalize-runtime/plural',
			'globalize/dist/globalize-runtime/relative-time',
			'globalize/dist/globalize-runtime/unit'
		]
	} : "./index.js",
	debug: !options.production,
	output: {
		path: './dist',
		filename: options.production ? 'app.[hash].js' : 'app.js'
	},
	externals: {
		'globalize-locales': 'var {}',
		'globalize/date': 'var {}'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
			{
				test: /\.(jpg|png)$/,
				loader: 'file'
			},
		]
	},
	plugins: [
		new Clean(['dist']),
		new ExtractTextPlugin('app.[hash].css'),
		new GlobalizePlugin({
			production: options.production,
			developmentLocale: 'de',
			supportedLocales: [ 'de' ],
			output: 'globalize-compiled-data-[locale].[hash].js'
		}),
		new HtmlWebpackPlugin({
			production: options.production,
			title: 'jQuery UI Autocomplete demo, built with webpack'
		})
	].concat( options.production ? [
		new webpack.optimize.DedupePlugin(),
		new CommonsChunkPlugin( "vendor", "vendor.[hash].js" ),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	] : [] )
};
