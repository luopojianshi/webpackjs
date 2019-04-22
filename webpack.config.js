const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		index: './src/index.js',
		another: './src/another-module.js'
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: 'Code Splitting 代码分离'
		})
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					name: 'commons',
					chunks: 'initial',
					minChunks: 2
				}
			}
		}
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}

