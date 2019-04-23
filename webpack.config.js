const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		index: './src/index.js'
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: 'Code Splitting 代码分离'
		})
	],
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}

