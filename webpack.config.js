const path = require('path')
// const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	plugins: [
		new CleanWebpackPlugin(),
		new HTMLWebpackPlugin({
			title: 'Caching 缓存'
		})
	],
	// optimization: {
	// 	splitChunks: {
	// 		cacheGroups: {
	// 			commons: {
	// 				name: 'manifest',
	// 				chunks: 'initial',
	// 				minChunks: 2
	// 			}
	// 		}
	// 	}
	// },
	output: {
    // filename: '[name].[chunkhash].js',
    filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	}
}

