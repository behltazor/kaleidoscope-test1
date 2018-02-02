const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'static'),
		filename: 'bundle.js',
		publicPath: '/static'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},
			{
				test: /\.sass$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader'],
					publicPath: '/static'
				})
			},
			{
				test: /\.(jpg|jpeg|png|gif|svg|eot|woff|woff2|ttf)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'img/'
					}
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("main.css"),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			IScroll: "./scrolloverflow.dev"
		})
	]
};
